"use client";

import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import Image from "next/image";

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
    <section className="py-20 px-10 xl:p-20 space-y-18">
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
          <div className="px-6 py-4 rounded-full outline outline-offset-[-1px] outline-blue-600 inline-flex justify-center items-center gap-2">
            <div className="text-blue-600 text-xl font-medium leading-normal">
              Fale com o nosso time
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse xl:flex-row items-center xl:items-start xl:justify-between gap-18 xl:gap-8">
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
                className={clsx(
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
                className={clsx(
                  "px-8 text-base overflow-hidden",
                  "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
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
          alt="Chat de atendimento"
          width={28}
          height={28}
          className="mx-auto"
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

      <div className="text-center">Voltar para o topo</div>
    </section>
  );
};
