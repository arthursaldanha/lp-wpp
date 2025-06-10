"use client";

import { useRef } from "react";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { benefits } from "@/app/(home)/layout";
import type { DisclosureReturn } from "@/hooks/useDisclosure";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const Benefits = ({ experience }: { experience: DisclosureReturn }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section id="services" className="py-20 flex flex-col justify-center items-center gap-14">
      {/* Cabeçalho com animação */}
      <motion.div
        className="space-y-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <motion.div
          className="self-stretch text-center justify-center"
          custom={0}
          variants={fadeUp}
        >
          <span className="text-gray-800 text-3xl font-medium leading-10">
            Atender no WhatsApp consome <br />
            tempo e energia?{" "}
          </span>
          <span className="text-blue-600 text-3xl font-medium leading-10">
            A gente resolve
          </span>
        </motion.div>

        <motion.div
          className="text-center justify-start text-gray-800 text-xl font-medium"
          custom={1}
          variants={fadeUp}
        >
          Atendimento manual atrasa seu crescimento. Automatize e pare de <br />{" "}
          perder tempo, vendas e clientes
        </motion.div>

        <motion.button
          onClick={experience.onOpen}
          className="px-6 py-4 rounded-full border border-blue-600 inline-flex justify-center items-center gap-2 cursor-pointer"
          custom={2}
          variants={fadeUp}
        >
          <div className="justify-center text-blue-600 text-2xl font-medium leading-normal">
            Testar grátis agora mesmo
          </div>
        </motion.button>
      </motion.div>

      {/* Carrossel */}
      <motion.div
        className="w-full px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Slider
          {...settings}
          ref={sliderRef}
          className="flex gap-6 !ml-[-12px] !mr-[-12px]"
        >
          {benefits.map(({ title, description, Icon }, index) => (
            <motion.div
              key={index}
              className="!px-3 h-full flex items-stretch"
              custom={index}
              variants={fadeUp}
            >
              <div className="w-[322px] h-[360px] xl:h-[408px] py-8 px-6 rounded-2xl border border-solid border-blue-100 hover:bg-[#D4EEFF] flex flex-col gap-3 transition-colors duration-150 ease-in group">
                <div className="w-14 h-14 flex-none rounded-full bg-blue-100 inline-flex justify-center items-center group-hover:bg-[#1B2733] transition-colors duration-150 ease-in">
                  <Icon
                    size={24}
                    className="text-[#1B2733] group-hover:text-[#D4EEFF] transition-colors duration-150 ease-in"
                  />
                </div>
                <div className="text-gray-800 text-2xl xl:text-3xl font-medium">
                  {title}
                </div>
                <div className="text-gray-800 text-base xl:text-xl font-normal">
                  {description}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Navegação do slider */}
      <motion.div
        className="inline-flex items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={benefits.length + 1}
      >
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
      </motion.div>
    </section>
  );
};
