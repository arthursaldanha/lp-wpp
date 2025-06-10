"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { faqData } from "@/app/(home)/layout/7-FAQ/constants";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

export const FAQ = ({ experience }: { experience: DisclosureReturn }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="faq" className="py-20 px-10 xl:p-20 space-y-[72px]">
      <div className="space-y-8 text-center">
        <div>
          <h3 className="text-zinc-900 text-4xl font-semibold">
            Ainda com dúvidas? A gente responde
          </h3>
          <h3 className="text-gray-800 text-xl font-medium">
            Clique nas perguntas abaixo para ver as respostas mais buscadas
          </h3>
        </div>

        <div>
          <button
            onClick={experience.onOpen}
            className="px-6 py-4 rounded-full outline outline-offset-[-1px] outline-blue-600 inline-flex justify-center items-center gap-2"
          >
            <div className="text-blue-600 text-xl font-medium leading-normal">
              Fale com o nosso time
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse xl:flex-row items-center xl:items-start xl:justify-between gap-[72px] xl:gap-8">
        <div>
          <Image
            src="/images/home/faq/message.png"
            alt="Chat de atendimento"
            width={515}
            height={374}
          />
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-none xl:max-w-3xl w-full space-y-3"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-zinc-200/70 rounded-2xl overflow-hidden"
            >
              <AccordionTrigger
                className={cn(
                  "group w-full text-left py-4 px-8 text-lg font-medium cursor-pointer flex justify-between items-center",
                  "bg-white"
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
          ))}
        </Accordion>
      </div>

      <div className="w-full px-6 py-12 bg-lime-100 rounded-2xl space-y-6">
        <Image
          src="/images/home/faq/verified.svg"
          alt="Ícone de verificado"
          width={28}
          height={28}
          className="mx-auto animate-rotateSlow"
        />

        <div className="text-center space-y-4">
          <h3 className="text-4xl font-medium text-slate-950">
            Verificação oficial pela
            <span className="text-blue-600">Meta</span>
          </h3>

          <h3 className="text-gray-800 text-xl font-medium">
            Mais confiança para você e seus clientes com tecnologia 100% segura
            e aprovada
          </h3>
        </div>
      </div>

      <div className="text-center">
        <button onClick={scrollToTop} className="cursor-pointer">
          Voltar para o topo
        </button>
      </div>
    </section>
  );
};
