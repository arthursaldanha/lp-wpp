"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { faqData } from "@/app/(home)/layout/8-FAQ/constants";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const FAQ = ({ experience }: { experience: DisclosureReturn }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      id="faq"
      className="py-20 px-10 xl:p-20 space-y-[72px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Títulos e botão */}
      <motion.div className="space-y-8 text-center">
        <motion.div variants={fadeUp(0)}>
          <h3 className="text-zinc-900 text-4xl font-semibold">
            Ainda com dúvidas? A gente responde
          </h3>
          <h3 className="text-gray-800 text-xl font-medium mt-4">
            Clique nas perguntas abaixo para ver as respostas mais buscadas
          </h3>
        </motion.div>

        <motion.div variants={fadeUp(0.2)}>
          <button
            onClick={experience.onOpen}
            className="px-6 py-4 rounded-full outline outline-offset-[-1px] outline-blue-600 inline-flex justify-center items-center gap-2"
          >
            <div className="text-blue-600 text-xl font-medium leading-normal">
              Fale com o nosso time
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Imagem + Accordions */}
      <div className="flex flex-col-reverse xl:flex-row items-center xl:items-start xl:justify-between gap-[72px] xl:gap-8">
        <motion.div variants={fadeUp(0.3)}>
          <Image
            src="/images/home/faq/message.png"
            alt="Chat de atendimento"
            width={515}
            height={374}
          />
        </motion.div>

        <motion.div
          variants={fadeUp(0.4)}
          className="max-w-none xl:max-w-3xl w-full space-y-3"
        >
          <Accordion type="single" collapsible>
            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(0.5 + index * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-zinc-200/70 rounded-2xl overflow-hidden"
                  >
                    <AccordionTrigger
                      className={cn(
                        "group w-full text-left py-4 px-8 text-lg font-medium cursor-pointer flex justify-between items-center bg-white"
                      )}
                    >
                      <div>{faq.title}</div>
                      <div className="transition-transform duration-300 group-data-[state=open]:rotate-45">
                        <Plus />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={cn(
                        "px-8 text-base overflow-hidden",
                        "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
                        "bg-white"
                      )}
                    >
                      <div className="pt-2 pb-6">{faq.content}</div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </div>
          </Accordion>
        </motion.div>
      </div>

      {/* Verificação */}
      <motion.div
        className="w-full px-6 py-12 bg-lime-100 rounded-2xl space-y-6"
        variants={fadeUp(0.6 + faqData.length * 0.1)}
      >
        <Image
          src="/images/home/faq/verified.svg"
          alt="Ícone de verificado"
          width={28}
          height={28}
          className="mx-auto animate-rotateSlow"
        />

        <motion.div className="text-center space-y-4">
          <h3 className="text-4xl font-medium text-slate-950">
            Verificação oficial pela <span className="text-blue-600">Meta</span>
          </h3>
          <h3 className="text-gray-800 text-xl font-medium">
            Mais confiança para você e seus clientes com tecnologia 100% segura
            e aprovada
          </h3>
        </motion.div>
      </motion.div>

      {/* Voltar ao topo */}
      <motion.div className="text-center" variants={fadeUp(1.2)}>
        <button onClick={scrollToTop} className="cursor-pointer">
          Voltar para o topo
        </button>
      </motion.div>
    </motion.section>
  );
};
