"use client";

import { ChevronDown } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const faqData = [
  {
    title: "Quais serviços a plataforma oferece?",
    content: (
      <div className="space-y-3">
        <p>
          Somos uma plataforma de automação e gerenciamento de atendimento via
          WhatsApp, especializada no setor farmacêutico. Nossa solução permite:
        </p>
        <ul className="space-y-3">
          {[
            "Enviem atualizações automáticas para seus clientes",
            "Reduza a carga de trabalhos manuais",
            "Personalize suas mensagens",
            "Analise dados e melhore sua estratégia",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheckCircle className="flex-none text-[#6ADBD8]" size={16} />{" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Quais serviços a plataforma oferece?",
    content:
      "Somos uma plataforma de automação e gerenciamento de atendimento via WhatsApp, especializada no setor farmacêutico. Nossa solução permite.",
  },
  {
    title: "Existe taxa de comissão?",
    content:
      "Para gerenciar a integração, acesse o painel de controle e configure as credenciais da API do seu e-commerce.",
  },
  {
    title: "Como funciona a montagem de fluxos de mensagens?",
    content:
      "Aceitamos pagamentos via cartão de crédito, boleto bancário e transferências via Pix.",
  },
  {
    title: "Consigo antecipar os recebíveis?",
    content:
      "Sim, é possível criar campanhas promocionais personalizadas utilizando o sistema de mensagens automáticas.",
  },
];

export const FAQ = () => {
  return (
    <section className="pt-10 px-4 pb-20 md:px-20 xl:pt-20 xl:pb-46 flex flex-col lg:flex-row justify-between gap-17.5">
      <div>
        <div className="px-2.5 py-2 bg-[#E6EFFE] rounded-xl justify-center items-center gap-2.5 inline-flex">
          <span className="text-[#42a4e1] text-base font-semibold font-['Host Grotesk'] uppercase leading-normal tracking-wide break-keep">
            AINDA COM DÚVIDAS?
          </span>
        </div>

        <h2 className="text-[40px] font-semibold mt-4">
          <span>Perguntas</span>
          <br />
          <span>frequentes</span>
        </h2>
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
            className="border border-[#384655] rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="group w-full text-left py-4 px-8 text-lg font-medium bg-white cursor-pointer flex justify-between items-center">
              <div>{faq.title}</div>
              <div className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                <ChevronDown />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 px-8 text-base">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
