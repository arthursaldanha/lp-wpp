"use client";

import { useState, useRef } from "react";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { plans } from "@/app/(home)/layout/6-PricingPlans/constants";
import { PricingCard } from "@/app/(home)/layout/6-PricingPlans/components/PricingCard";

import { motion, useInView } from "framer-motion";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

export const PricingPlans = ({
  experience,
}: {
  experience: DisclosureReturn;
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState("base");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="pricing-plans"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-20 py-[100px] flex flex-col"
    >
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
                  experience={experience}
                />
              ))}
            </div>
          </div>

          <div className="max-w-xl lg:max-w-none text-center text-neutral-500 text-lg font-medium">
            <span>
              Valores do gateway acrescidos do take rate conforme o plano
              contratado. Consulte as taxas aplicáveis
            </span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={experience.onOpen}
            className="py-4 px-6 inline-flex items-center gap-1 text-blue-600 cursor-pointer"
          >
            <span className="text-2xl font-medium">
              Fale com um especialista
            </span>
            <TbCircleArrowRightFilled className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
