"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ToolDemonstration() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVisible]);

  return (
    <section className="space-y-12 pt-20 px-20 pb-40 text-center">
      <div className="space-y-4">
        <h3 className="text-gray-800 text-3xl font-semibold">
          Tecnologia oficial da Meta com <br />
          <span className="text-blue-600">segurança e performance</span> de
          verdade
        </h3>

        <h3 className="text-gray-800 text-2xl font-medium">
          Você está protegido com a API oficial da WhatsApp Business <br />
          sem bloqueios e com envio garantido
        </h3>
      </div>

      <div
        ref={containerRef}
        className="relative w-[428px] h-[820px] mx-auto flex justify-center items-center bg-gradient-to-b from-blue-600 via-sky-400 to-lime-100 rounded-2xl"
      >
        <div className="relative w-[320px] h-[700px] mx-auto">
          {/* Imagem do iPhone por cima */}
          <Image
            src="/images/home/tool-demonstration/iPhone.png"
            alt="iPhone moldura"
            width={320}
            height={700}
            className="absolute top-0 left-0 pointer-events-none"
          />

          {/* Vídeo com máscara aplicada */}
          <video
            ref={videoRef}
            muted
            playsInline
            loop
            className="absolute top-[17px] left-[17px] w-[285px] h-[666px] object-cover mask-video"
            src="/teste.mp4"
          />
        </div>

        {/* Itens suspensos */}
        {/* Notificacao de pedido aceito */}
        <div className="absolute top-[112px] -left-[320px] w-full max-w-[400px] pl-2 py-2 pr-3.5 rounded-2xl shadow-md bg-white flex items-center gap-2">
          <div>
            <Image
              src="/images/home/tool-demonstration/fapp-ecomm.svg"
              alt="Ícone do Farmácias Ecommerce"
              width={40}
              height={40}
            />
          </div>

          <div className="flex-1 text-start">
            <div className="w-full inline-flex justify-between">
              <span className="text-neutral-800 text-lg font-semibold">
                Seu pedido foi aceito!
              </span>
              <span className="text-neutral-700 text-base font-medium">
                agora
              </span>
            </div>

            <div className="text-neutral-700 text-base font-normal">
              A loja já começou a separar seu pedido
            </div>
          </div>
        </div>

        {/* Ícone de Verificado */}
        <div className="absolute top-[275px] -left-12 p-3 bg-white rounded-lg shadow-md">
          <Image
            src="/images/home/faq/verified.svg"
            alt="Chat de atendimento"
            width={40}
            height={40}
          />
        </div>

        {/* Banner */}
        <div className="absolute bottom-[175px] -left-[270px] w-full max-w-[282px] p-2 bg-white rounded shadow-md">
          <Image
            src="/images/home/tool-demonstration/man-with-box.png"
            alt="Banner"
            width={266}
            height={150}
          />
          <div className="text-start">
            <span className="text-black text-base font-normal">
              Um entregador autorizado está a caminho da{" "}
              <span className="font-medium">Farmácia Saúde</span> para coletar
              seu pedido
            </span>
          </div>
          <div className="text-end">
            <span className="text-zinc-400 text-sm font-normal">11.14 AM</span>
          </div>
        </div>

        {/* Notificacao de AI */}
        <div className="absolute -bottom-9 -left-36 w-full max-w-[332px] p-5 rounded-2xl bg-white flex items-center gap-3.5 shadow-md">
          <div className="flex-none">
            <Image
              src="/images/home/hero/ai.svg"
              alt="Banner"
              width={28.89}
              height={31.24}
            />
          </div>

          <div className="w-full space-y-2.5">
            <div className="w-1/2 h-3 bg-neutral-200 rounded-2xl animate-pulse" />
            <div className="w-full h-2.5 bg-neutral-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
