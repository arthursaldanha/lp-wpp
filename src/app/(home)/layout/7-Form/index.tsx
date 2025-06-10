"use client";

import { useState } from "react";

import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .refine(
      (val) => /^[A-Za-zÀ-ú\s]+$/.test(val),
      "O nome não pode conter números"
    ),
  phone: z
    .string()
    .min(14, "Telefone é obrigatório")
    .refine(
      (val) => /\(\d{2}\)\s\d{5}-\d{4}/.test(val),
      "Formato de telefone inválido"
    ),
  email: z.string().email("Email inválido"),
  businessName: z.string().min(1, "Nome da farmácia é obrigatório"),
});

type FormData = z.infer<typeof formSchema>;

// Mesma animação fadeUp usada no FAQ, para reaproveitar
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const Form = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const rawPhone = data.phone.replace(/\D/g, "");
      return axios.post(
        "https://sda-api.farmaciasecommerce.com.br/whatsapp-pharma/lead",
        {
          ...data,
          phone: rawPhone,
        }
      );
    },
    onSuccess: () => {
      reset();
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        mutation.reset();
      }, 4000);
    },
  });

  const phoneValue = watch("phone");
  const nameValue = watch("name");

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const formatted = digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);

    setValue("phone", formatted);
  };

  const handleNameChange = (value: string) => {
    const onlyLetters = value.replace(/[^A-Za-zÀ-ú\s]/g, "");
    setValue("name", onlyLetters);
  };

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <section className="space-y-14 py-14 px-4 lg:px-6 xl:px-8 bg-[#D4EEFF]">
      {/* Texts at top */}
      <motion.div
        className="space-y-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          variants={fadeUp(0)}
          className="text-zinc-950 text-3xl font-medium"
        >
          Está <span className="text-blue-600">perdendo vendas</span> por falta{" "}
          <br /> de atendimento rápido?
        </motion.h3>

        <motion.h3
          variants={fadeUp(0.15)}
          className="text-gray-800 text-xl font-medium"
        >
          Descubra em poucos minutos como{" "}
          <span className="text-blue-600">automatizar seu WhatsApp</span> e
          transformar <br />
          contatos em vendas com nossa consultoria gratuita
        </motion.h3>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[634px] space-y-9 p-8 xl:p-14 mx-auto bg-white rounded-xl shadow text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp(0.3)}>
          <h3 className="text-xl font-medium text-zinc-800">
            Descubra como nossa solução pode <br /> transformar seu negócio
          </h3>
        </motion.div>

        <motion.div variants={fadeUp(0.45)} className="space-y-4 text-left">
          <motion.div variants={fadeUp(0.45)}>
            <input
              {...register("name")}
              value={nameValue || ""}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 rounded-md border border-zinc-300"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </motion.div>

          <motion.div variants={fadeUp(0.6)}>
            <input
              type="email"
              {...register("email")}
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-3 rounded-md border border-zinc-300"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeUp(0.75)}>
            <input
              {...register("phone")}
              value={phoneValue || ""}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="Digite seu telefone"
              className="w-full px-4 py-3 rounded-md border border-zinc-300"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeUp(0.9)}>
            <input
              {...register("businessName")}
              placeholder="Nome da farmácia"
              className="w-full px-4 py-3 rounded-md border border-zinc-300"
            />
            {errors.businessName && (
              <p className="text-red-600 text-sm mt-1">
                {errors.businessName.message}
              </p>
            )}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp(1.05)}>
          <motion.button
            type="submit"
            disabled={mutation.isPending || success}
            className={`px-6 py-4 rounded-full inline-flex justify-center items-center gap-2 transition-colors duration-300 ${
              success ? "bg-green-600" : "bg-blue-600"
            }`}
            layout
          >
            <AnimatePresence mode="wait" initial={false}>
              {mutation.isPending ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="flex items-center gap-2 text-white text-2xl font-medium"
                >
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Enviando...
                </motion.div>
              ) : success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center gap-2 text-white text-2xl font-medium"
                >
                  <CheckCircle className="w-6 h-6" />
                  Sucesso!!!
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="text-white text-2xl font-medium"
                >
                  Quero me cadastrar agora
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
};
