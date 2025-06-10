"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { headerNavItems } from "@/app/(home)/layout";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInFirstShape = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 0.55,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};
const fadeInSecondShape = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 0.3,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};
const fadeInThirdShape = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 0.2,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const bounce = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Hero = ({ experience }: { experience: DisclosureReturn }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Shapes */}
      <motion.div
        className="absolute -bottom-[740px] -left-[360px] w-[1366.55px] h-[1366.55px] rotate-[-90deg] bg-gradient-to-bl from-green-200 to-sky-400 rounded-full blur-[100px] opacity-55"
        variants={fadeInFirstShape}
        initial="hidden"
        animate="show"
      />
      <motion.div
        className="absolute -top-[200px] -right-[800px] w-[1297.76px] h-[1069.18px] rotate-[165deg] bg-gradient-to-b from-emerald-300 to-sky-400 rounded-full blur-[100px] opacity-30"
        variants={fadeInSecondShape}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[751.85px] h-[563.85px] rotate-[4.49deg] bg-gradient-to-b from-teal-300 to-sky-400 rounded-full blur-[100px] opacity-20"
        variants={fadeInThirdShape}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      />

      {/* Header */}
      <motion.div
        className="relative pl-20 py-6 pr-14 flex justify-between items-center z-20"
        variants={fadeInDown}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >
        <Image
          src="/images/logo.svg"
          alt="Logo do Whatsapp Farma"
          width={150}
          height={34.39}
        />

        <div className="flex items-center">
          {headerNavItems.map(({ title, nav }) => (
            <Link
              key={title}
              href={nav}
              className="px-4 text-base text-[#0A0A0B] font-medium"
            >
              {title}
            </Link>
          ))}
        </div>

        <button onClick={experience.onOpen} className="px-6 py-4 bg-blue-600 rounded-full cursor-pointer">
          <div className="justify-center text-white text-xl font-medium leading-normal">
            Teste gratuitamente
          </div>
        </button>
      </motion.div>

      {/* Textos */}
      <motion.div
        className="relative mt-28 ml-20 pb-[520px] xl:pb-[360px] z-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="mb-2" variants={fadeInUp}>
          <div className="px-2.5 py-1 rounded-full outline outline-offset-[-1px] outline-blue-600 inline-flex justify-center items-center gap-2.5">
            <div className="w-4 h-4 relative">
              <Image
                src="/images/home/hero/ai.svg"
                alt="Ícone IA"
                width={16}
                height={16}
              />
            </div>

            <div className="text-blue-600 text-xs font-semibold uppercase leading-normal tracking-wide">
              É simples, prático e fácil
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-4" variants={fadeInUp}>
          <h1 className="text-slate-950 text-5xl font-bold leading-14">
            Venda Mais pelo WhatsApp <br /> com Atendimento Automatizado
          </h1>
          <h2 className="text-zinc-900 text-2xl font-medium leading-9">
            Com o Whatsapp Farma, você cria atendimentos automáticos, <br />{" "}
            organiza conversas e transforma mensagens em vendas!
          </h2>
        </motion.div>

        <motion.div className="mt-8" variants={fadeInUp}>
          <button onClick={experience.onOpen} className="px-6 py-4 bg-blue-600 rounded-full inline-flex justify-center items-center gap-2 cursor-pointer">
            <Image
              src="/images/home/spoke.png"
              alt="Ícone de um raio"
              width={24}
              height={24}
            />

            <span className="justify-center text-white text-xl font-medium">
              Comece grátis agora
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Elementos visuais sobre os Shapes */}
      <motion.div
        className="absolute bottom-0 right-[160px] z-50"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        transition={{ delay: 1 }}
      >
        <div className="relative">
          {/* FAPP ECOMM ícone com bounce */}
          <motion.div
            className="absolute top-[220px] left-[160px] -z-10"
            variants={bounce}
            animate="animate"
          >
            <Image
              src="/images/home/hero/wpp.svg"
              alt="Ícone do WhatsApp Farma"
              width={80}
              height={80}
            />
          </motion.div>

          {/* Homem */}
          <motion.div variants={fadeInUp} initial="hidden" animate="show">
            <Image
              src="/images/home/hero/man.png"
              alt="Homem utilizando o Whatsapp Farma"
              width={542}
              height={620}
              priority
            />
          </motion.div>

          {/* Placa receita com bounce */}
          <motion.div
            className="absolute bottom-[104px] -left-12 p-5 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2"
            variants={bounce}
            animate="animate"
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-slate-950 text-base font-semibold leading-tight">
                Aumente sua receita
              </div>
              <div className="self-stretch justify-start text-sky-400 text-lg font-bold leading-snug">
                +4.0000 lojas
              </div>
            </div>
          </motion.div>

          {/* Placa usuários com bounce */}
          <motion.div
            className="absolute top-72 -right-32 w-80 h-20 p-4 bg-white rounded-lg inline-flex justify-start items-center gap-2"
            variants={bounce}
            animate="animate"
          >
            <Image
              src="/images/home/hero/avatars.svg"
              alt="Avatars"
              width={96}
              height={40}
            />

            <div className="inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-slate-950 text-base font-semibold leading-tight">
                1000+
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal leading-tight">
                Ativos em nossa solução
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
