"use client";

import { useState } from "react";
import { PricingCard } from "@/app/(home)/layout/6-PricingPlans/components/PricingCard";
import { TbCircleArrowRightFilled } from "react-icons/tb";

const plans = [
  {
    id: "base",
    name: "Plano Básico",
    description:
      "Ideal para farmácias que desejam ativar o canal de vendas no WhatsApp com atendimento automático e estrutura essencial",
    price: 189.0,
    features: [
      { text: "1 número de whatsapp" },
      { text: "Fluxo conversacional padrão de atendimento" },
      { text: "Atendimento automático e respostas rápidas" },
      { text: "Usuários adicionais: R$ 50/mês por usuário" },
    ],
    button: {
      text: "Contratar",
      onClick: () => console.log("Contratar plano Base"),
    },
    disclaimer: "",
  },
  {
    id: "premium",
    name: "Plano Premium (Profissional)",
    description:
      "Para farmácias que desejam expandir e profissionalizar o atendimento no WhatsApp com mais recursos e automações",
    price: 284.0,
    mostRequested: true,
    startingFrom: "",
    features: [
      { text: "Até 3 números de WhatsApp" },
      { text: "Catálogo de produtos" },
      { text: "Menu de atendimento personalizado" },
      { text: "Rastreamento de pedidos via WhatsApp" },
      { text: "Usuários adicionais: R$ 50/mês por usuário" },
    ],
    button: {
      text: "Contratar",
      onClick: () => console.log("Falar com vendas sobre Tracking"),
    },
    disclaimer: "",
  },
  {
    id: "enterprise",
    name: "Plano Enterprise (Personalizável)",
    description:
      "Solução avançada para redes de farmácia ou operações com grande volume de mensagens e necessidade de personalização",
    price: 499.0,
    features: [
      { text: "Até 5 números de WhatsApp" },
      { text: "Catálogo de produtos selecionado" },
      { text: "Customização completa dos fluxos" },
      { text: "Menu de atendimento totalmente personalizável" },
      { text: "Link de compra direta via WhatsApp" },
      { text: "Integrações avançadas" },
      { text: "Suporte prioritário e atendimento dedicado" },
      { text: "Usuários adicionais: R$ 50/mês por usuário" },
    ],
    button: {
      text: "Falar com vendas",
      onClick: () => console.log("Falar com vendas sobre Marketing"),
    },
    disclaimer: "",
  },
];

export const PricingPlans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("base");

  return (
    <section className="space-y-20 py-25 flex flex-col">
      <div className="space-y-4 text-center">
        <div className="text-zinc-900 text-4xl font-medium">
          <p>
            <span className="text-blue-600">Planos acessíveis</span> para
            farmácias <br /> de todos os tamanhos
          </p>
        </div>

        <div className="text-gray-800 text-xl font-medium">
          <span>Sem taxas escondidas, sem burocracia. Você no controle</span>
        </div>
      </div>

      <div className="space-y-14">
        <div className="p-4 flex flex-col-reverse lg:flex-col gap-14 lg:gap-6 items-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-full h-3/5 bg-gradient-to-r from-[#62FFA1] to-[#42A4E1] blur-[130px] opacity-40" />

            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-4">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  {...plan}
                  isSelected={selectedPlanId === plan.id}
                  onSelect={setSelectedPlanId}
                />
              ))}
            </div>
          </div>

          <div className="max-w-xl lg:max-w-none text-center text-neutral-500 text-lg font-medium">
            <span>
              Ao contratar todas as soluções você pode ter a negociação de taxas
              reduzidas, consulte nosso time de consultores.
            </span>
          </div>
        </div>

        <div className="text-center">
          <button className="py-4 px-6 inline-flex items-center gap-1 text-blue-600 cursor-pointer">
            <span className="text-2xl font-medium">
              Fale com um especialista
            </span>
            <TbCircleArrowRightFilled className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
