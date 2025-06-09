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
    title: "O que é automação de vendas no WhatsApp?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        É o uso de tecnologia para agilizar atendimentos, responder clientes
        automaticamente, enviar campanhas e gerenciar pedidos — tudo dentro do
        WhatsApp, de forma prática e escalável.
      </p>
    ),
  },
  {
    title: "Como essa solução pode ajudar minha farmácia?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Você consegue atender vários clientes ao mesmo tempo, organizar melhor
        os pedidos e manter um histórico completo das conversas. Isso aumenta as
        chances de conversão, fidelização e melhora a experiência do cliente.
      </p>
    ),
  },
  {
    title: "Preciso ter o WhatsApp Business API?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Sim. Nossa plataforma é integrada ao WhatsApp Business API, o que
        garante mais estabilidade, segurança e recursos avançados. Nós cuidamos
        da migração e configuração do seu número nesse modelo.
      </p>
    ),
  },
  {
    title: "É necessário ter conhecimento técnico para usar a plataforma?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Não! A ferramenta é simples, intuitiva e baseada em fluxos visuais. E,
        se precisar, nosso time de suporte estará sempre disponível para te
        ajudar.
      </p>
    ),
  },
  {
    title: "Quais planos estão disponíveis?",
    content: (
      <div className="space-y-1">
        <p>Oferecemos três opções:</p>
        <p>
          <span className="font-semibold">Essencial</span> - Ideal para começar
          com o básico.
        </p>
        <p>
          <span className="font-semibold">Profissional</span> - Mais completo,
          pensado para crescer junto com seu negócio.
        </p>
        <p>
          <span className="font-semibold">Personalizável</span> - Para grandes
          volumes e fluxos conversacionais personalizados.
        </p>
      </div>
    ),
  },
  {
    title: "Posso testar antes de contratar?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Sim! Você pode agendar uma demonstração gratuita para conhecer a
        plataforma e ver como ela pode transformar o atendimento da sua
        farmácia.
      </p>
    ),
  },
  {
    title: "Como funciona a contratação?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Você escolhe o plano ideal, faz o pagamento e nossa equipe cuida de toda
        a ativação e integração com o seu número de WhatsApp.
      </p>
    ),
  },
  {
    title: "A automação responde em tempo real?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Sim. O chatbot responde automaticamente assim que a mensagem é recebida
        — 24 horas por dia, 7 dias por semana.
      </p>
    ),
  },
  {
    title: "Posso acompanhar os resultados?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Com certeza. A plataforma oferece dashboards com métricas como taxa de
        resposta, volume de atendimentos, desempenho de campanhas e muito mais.
      </p>
    ),
  },
  {
    title: "Existe suporte caso eu tenha dúvidas?",
    content: (
      <p className="text-zinc-700 text-sm font-normal">
        Sim! Nosso suporte está disponível por WhatsApp e e-mail, além de
        materiais de apoio direto na plataforma.
      </p>
    ),
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
            className="border border-zinc-200/70 rounded-2xl overflow-hidden"
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
