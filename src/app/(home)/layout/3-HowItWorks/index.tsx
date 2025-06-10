"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { steps } from "@/app/(home)/layout/3-HowItWorks/constants";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

export function HowItWorks({ experience }: { experience: DisclosureReturn }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const topOffset = window.innerHeight / 2 - rect.top;
      const stepHeight = rect.height / steps.length;

      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(topOffset / stepHeight))
      );

      // debounce
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setActiveIndex(index);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section className="relative bg-[#f5fff8] py-20 px-10 xl:py-25 xl:px-20 space-y-20">
      <div className="space-y-4">
        <div className="self-stretch text-center justify-center">
          <span className="text-gray-800 text-3xl font-medium leading-10">
            Deixe o atendimento no WhatsApp <br /> funcionando no{" "}
          </span>
          <span className="text-blue-600 text-3xl font-medium leading-10">
            piloto automático
          </span>
        </div>

        <div className="text-center text-gray-800 text-xl font-medium">
          Configure em minutos e atenda seus clientes mesmo <br /> quando sua
          equipe estiver offline
        </div>
      </div>

      <div className="flex justify-between gap-6">
        {/* Left side */}
        <div ref={containerRef} className="flex-1 space-y-8">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  scale: activeIndex === index ? 1 : 0.98,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`inline-flex justify-start gap-4 rounded-2xl p-6 transition-colors duration-300 ${
                  activeIndex === index
                    ? "items-start bg-white text-black shadow-sm"
                    : "items-center bg-transparent text-zinc-400 text-lg font-medium"
                }`}
              >
                <p
                  className={`text-lg font-medium ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[#6ADBD8] to-[#40A4E1] inline-block text-transparent bg-clip-text"
                      : "text-gray-800"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}.{" "}
                </p>

                <div className="space-y-2">
                  <span className="font-semibold">{step.title}</span>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="text-gray-800 text-base font-normal"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={experience.onOpen}
            className="px-6 py-4 rounded-full bg-blue-600 inline-flex justify-center items-center gap-2"
          >
            <Image
              src="/images/home/spoke.png"
              alt="Ícone de um raio"
              width={24}
              height={24}
            />
            <div className="justify-center text-white text-xl font-medium">
              Veja como funciona na prática
            </div>
          </button>
        </div>

        {/* Right side */}
        <div className="max-w-[592px] flex-1 relative">
          <Image
            src="/images/home/wpp-ecomm/woman.png"
            alt="Mulher usando celular"
            width={592}
            height={619}
          />
        </div>
      </div>
    </section>
  );
}
