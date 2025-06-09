"use client";

import { useRef } from "react";

import Slider from "react-slick";
import {
  ArrowLeft,
  ArrowRight,
  ChartSpline,
  ExternalLink,
  Goal,
  Lightbulb,
  MessageCircleMore,
  ShoppingCart,
  Zap,
} from "lucide-react";

const benefits = [
  {
    title: "Atendimento automatizado 24/7",
    description:
      "Nunca perca uma venda! Nossos chatbots garantem atendimento rápido, reduzindo filas de espera e otimizando o tempo da sua equipe.",
    Icon: MessageCircleMore,
  },
  {
    title: "Catálogo interativo de produtos",
    description:
      "Envie listas de produtos com imagens, descrições e preços diretamente no WhatsApp do cliente, facilitando a experiência de compra.",
    Icon: ShoppingCart,
  },
  {
    title: "IA aplicada ao atendimento",
    description:
      "Configure mensagens personalizadas com IA para responder dúvidas, indicar produtos e criar uma experiência humanizada.",
    Icon: Lightbulb,
  },
  {
    title: "Link exclusivo para compras e pedidos",
    description:
      "Direcione seus clientes para uma página exclusiva de pedidos e finalize as vendas diretamente pelo WhatsApp.",
    Icon: ExternalLink,
  },
  {
    title: "Relatórios e métricas de desempenho",
    description:
      "Monitore atendimentos, pedidos e interações dos clientes para tomar decisões mais assertivas no seu negócio.",
    Icon: ChartSpline,
  },
  {
    title: "Personalização e IA aplicada ao atendimento",
    description:
      "Mensagens personalizadas com IA para responder às dúvidas mais comuns, indicar produtos e criar uma experiência fluida e humanizada.",
    Icon: Goal,
  },
];

export const Benefits = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 flex flex-col justify-center items-center gap-14">
      <div className="space-y-6 text-center">
        <div className="self-stretch text-center justify-center">
          <span className="text-gray-800 text-3xl font-medium leading-10">
            Atender no WhatsApp consome <br />
            tempo e energia?{" "}
          </span>
          <span className="text-blue-600 text-3xl font-medium leading-10">
            A gente resolve
          </span>
        </div>

        <div className="text-center justify-start text-gray-800 text-xl font-medium">
          Atendimento manual atrasa seu crescimento. Automatize e pare de <br />{" "}
          perder tempo, vendas e clientes
        </div>

        <button className="px-6 py-4 rounded-full border border-blue-600 inline-flex justify-center items-center gap-2 cursor-pointer">
          <div className="justify-center text-blue-600 text-2xl font-medium leading-normal">
            Testar grátis agora mesmo
          </div>
        </button>
      </div>

      <div className="w-full px-4">
        <Slider
          {...settings}
          ref={sliderRef}
          className="flex gap-6 !ml-[-12px] !mr-[-12px]"
        >
          {benefits.map(({ title, description, Icon }, index) => (
            <div key={index} className="h-full flex items-stretch">
              <div className="w-[322px] h-[408px] py-8 px-6 rounded-2xl border border-solid border-blue-100 hover:bg-[#D4EEFF] flex flex-col gap-3 transition-colors duration-150 ease-in group">
                <div className="w-14 h-14 rounded-full bg-blue-100 inline-flex justify-center items-center group-hover:bg-[#1B2733] transition-colors duration-150 ease-in">
                  <Icon
                    size={24}
                    className="text-[#1B2733] group-hover:text-[#D4EEFF] transition-colors duration-150 ease-in"
                  />
                </div>
                <div className="text-gray-800 text-3xl font-medium">
                  {title}
                </div>
                <div className="text-gray-800 text-xl font-normal">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="inline-flex items-center gap-4">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-12 h-12 rounded-full inline-flex justify-center items-center hover:bg-[#D4EEFF] cursor-pointer transition-all duration-200"
        >
          <ArrowLeft size={28} className="text-[#1B2733]" />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-12 h-12 rounded-full inline-flex justify-center items-center hover:bg-[#D4EEFF] cursor-pointer transition-all duration-200"
        >
          <ArrowRight size={28} className="text-[#1B2733]" />
        </button>
      </div>
    </section>
  );
};
