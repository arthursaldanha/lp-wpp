"use client";

import Link from "next/link";
import Image from "next/image";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import { headerNavItems } from "@/app/(home)/layout";
import type { DisclosureReturn } from "@/hooks/useDisclosure";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const percentage = useMotionValue(10);
  const rounded = useTransform(
    percentage,
    (latest) => `${Math.round(latest)}%`
  );

  const [displayValue, setDisplayValue] = useState("10%");

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });

    const controls = animate(percentage, 100, {
      duration: 20,
      ease: "linear",
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, []);

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
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo do Whatsapp Farma"
            width={150}
            height={34.39}
          />
        </Link>

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

        <button
          onClick={experience.onOpen}
          className="px-6 py-4 bg-blue-600 rounded-full cursor-pointer"
        >
          <div className="justify-center text-white text-xl font-medium leading-normal">
            Teste gratuitamente
          </div>
        </button>
      </motion.div>

      {/* Textos */}
      <motion.div
        className="relative mt-28 ml-20 pb-[532px] xl:pb-[372px] z-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="mb-4" variants={fadeInUp}>
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
          <h1 className="text-slate-950 text-5xl font-bold leading-[56px]">
            Venda Mais pelo WhatsApp <br /> com Atendimento Automatizado
          </h1>
          <h2 className="text-zinc-900 text-2xl leading-9">
            Com o <span className="font-medium">Whatsapp Farma</span>, você cria
            atendimentos automáticos, <br /> organiza conversas e transforma
            mensagens em vendas!
          </h2>
        </motion.div>

        <motion.div className="mt-8" variants={fadeInUp}>
          <button
            onClick={experience.onOpen}
            className="px-6 py-4 bg-blue-600 rounded-full inline-flex justify-center items-center gap-2 cursor-pointer"
          >
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
            className="absolute bottom-[104px] -left-12 p-4 bg-white rounded-lg"
            variants={bounce}
            animate="animate"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="relative">
                <Image
                  src="/images/home/hero/waves.svg"
                  alt="Ilustração de ondas"
                  width={116.07}
                  height={76.45}
                />
                <span
                  className={cn(
                    "absolute top-[9px] text-[10px] font-medium text-white",
                    displayValue.length === 3 && "left-[40px]",
                    displayValue.length === 4 && "left-[37px]"
                  )}
                >
                  {displayValue}
                </span>
              </div>

              <div className="text-slate-950 text-sm font-semibold">
                Veja sua receita crescer
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
              width={68}
              height={40}
            />

            <div className="inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-slate-950 text-base font-semibold leading-tight">
                A solução ideal
              </div>
              <div className="justify-start text-gray-600 text-xs font-normal leading-tight">
                para vender mais com menos esforço
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
