"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cards } from "@/app/(home)/layout/5-Steps/constants";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

export function Steps({ experience }: { experience: DisclosureReturn }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-10 xl:p-20 space-y-20 bg-[#F6FFF1]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <div className="text-gray-800 text-3xl font-medium">
          <h3>
            Pronto para transformar o WhatsApp{" "}
            <br className="hidden md:block" /> em sua melhor ferramenta de
            vendas?
          </h3>
        </div>

        <div className="text-gray-800 text-2xl font-medium">
          <h3>
            Comece agora com nosso plano gratuito, sem precisar de{" "}
            <br className="hidden md:block" /> cartão e com suporte desde o
            primeiro clique
          </h3>
        </div>
      </motion.div>

      <div className="max-w-[660px] xl:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 xl:flex xl:justify-center xl:items-stretch xl:gap-4">
        {cards.map(({ title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="max-w-[289px] xl:flex-1 px-4 py-6 bg-white rounded-2xl place-self-center self-stretch inline-flex flex-col justify-start items-start gap-6"
          >
            <div className="w-14 h-14 relative inline-flex justify-center items-center bg-blue-600 rounded-full overflow-hidden">
              <span className="text-white text-3xl font-medium">
                {index + 1}
              </span>
            </div>

            <div className="min-h-16 text-neutral-900 text-2xl font-semibold">
              <span>{title}</span>
            </div>

            <div className="text-gray-800 text-lg font-normal">
              <span>{description}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={experience.onOpen}
          className="px-6 py-4 bg-blue-600 rounded-full inline-flex justify-center items-center gap-2"
        >
          <Image
            src="/images/home/spoke.png"
            alt="Ícone de um raio"
            width={24}
            height={24}
          />
          <div className="justify-center text-white text-2xl font-medium leading-normal">
            Quero automatizar meu WhatsApp agora
          </div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
