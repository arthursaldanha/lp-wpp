FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn install; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build && \
    npm prune --production

# Production image, copy all the files and run next
FROM farmaciasapp.azurecr.io/corp/node/18/runtime/node18:latest AS runner

WORKDIR /app

USER root

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/package.json ./

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/public ./public

COPY --from=builder /app/node_modules ./node_modules

RUN addgroup --system --gid 1001 nodejs

RUN chown app:nodejs /app

USER app

EXPOSE 3000

CMD ["npm", "start"]