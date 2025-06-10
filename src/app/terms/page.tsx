"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { headerNavItems } from "@/app/terms/constants";
import { useDisclosure } from "@/hooks/useDisclosure";
import { ExperienceDialog } from "../(home)/components/ExperienceDialog";

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Terms() {
  const experience = useDisclosure({ defaultIsOpen: false });

  return (
    <section className="max-w-[1440px] w-full mx-auto">
      <motion.div
        className="relative pl-20 py-6 pr-14 flex justify-between items-center z-20"
        variants={fadeInDown}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo do Whatsapp Farma"
            width={150}
            height={34.39}
          />
        </Link>

        <div className="flex items-center">
          {headerNavItems.map(({ title, nav }) => (
            <Link
              key={title}
              href={nav}
              className="px-4 text-base text-[#0A0A0B] font-medium"
            >
              {title}
            </Link>
          ))}
        </div>

        <button
          onClick={experience.onOpen}
          className="px-6 py-4 bg-blue-600 rounded-full cursor-pointer"
        >
          <div className="justify-center text-white text-xl font-medium leading-normal">
            Teste gratuitamente
          </div>
        </button>
      </motion.div>

      <div className="py-20 space-y-[70px]">
        <div className="space-y-4 text-center">
          <h1 className="text-zinc-900 text-4xl font-semibold">
            Termos e Condições de Uso
          </h1>
          <h2 className="text-gray-800 text-xl font-medium leading-7">
            Bem-vindo ao Whatsapp Farma <br /> Estes termos e condições
            estabelecem as regras de utilização da nossa plataforma
          </h2>
        </div>

        <div className="flex flex-col gap-3 text-gray-800 text-xl font-medium">
          <span>1. Introdução</span>

          <span>
            Bem-vindo ao Whatsapp Farma. Ao utilizar nossos serviços, você
            concorda com os termos e condições descritos abaixo. Por favor, leia
            atentamente antes de continuar a utilização de nossos serviços.
          </span>

          <span>2. Uso dos Serviços</span>

          <span>
            Nossos serviços são disponibilizados exclusivamente para uso pessoal
            e comercial legítimo. É proibido utilizá-los para atividades ilegais
            ou não autorizadas.
          </span>

          <span>3. Conta do Usuário</span>

          <span>
            Você é responsável por manter a confidencialidade das credenciais de
            acesso à sua conta.
          </span>

          <span>
            Notifique-nos imediatamente em caso de uso não autorizado de sua
            conta.
          </span>

          <span>4. Coleta e Uso de Dados</span>

          <span>
            A utilização de nossos serviços implica a coleta e o tratamento de
            dados conforme descrito em nossa Política de Privacidade. Os dados
            coletados são utilizados para personalizar e automatizar as
            interações via WhatsApp.
          </span>

          <span>5. Cookies</span>

          <span>
            Utilizamos cookies para melhorar a experiência do usuário, analisar
            tendências e administrar o site. Ao continuar utilizando nossos
            serviços, você concorda com o uso de cookies, conforme descrito na
            Política de Privacidade.
          </span>

          <span>6. Hiperlinks</span>

          <span>
            Nosso site e serviços podem conter links para sites de terceiros.
            Não somos responsáveis pelo conteúdo ou práticas de privacidade
            desses sites. Recomendamos a leitura das políticas de privacidade de
            quaisquer sites externos que você visitar.
          </span>

          <span>7. Licença de Uso</span>

          <span>
            Concedemos a você uma licença limitada, não exclusiva e
            intransferível para acessar e usar nossos serviços conforme os
            termos descritos aqui. Não é permitido:
          </span>

          <span>
            Modificar, distribuir ou reproduzir partes dos serviços sem
            autorização.
          </span>

          <span>
            Utilizar os serviços para qualquer fim ilegal ou proibido.
          </span>

          <span>8. Aplicações de Terceiros</span>

          <span>
            Você autoriza a instalação e integração de aplicações de terceiros
            confiáveis necessárias para o funcionamento completo do nosso
            produto. Essas integrações são analisadas para garantir a segurança
            e conformidade com nossos padrões de privacidade.
          </span>

          <span>9. Alterações nos Termos</span>

          <span>
            Podemos alterar estes Termos de Uso periodicamente para refletir
            mudanças nos serviços ou nas leis aplicáveis. As alterações serão
            comunicadas por meio de nossos canais oficiais. O uso contínuo dos
            serviços após as alterações constitui aceitação dos novos termos.
          </span>

          <span>10. Encerramento de Conta</span>

          <span>
            Reservamo-nos o direito de suspender ou encerrar contas que violem
            estes Termos de Uso ou as leis aplicáveis.
          </span>

          <span>11. Limitação de Responsabilidade</span>

          <span>
            Não seremos responsáveis por danos diretos, indiretos ou
            consequenciais decorrentes do uso ou da incapacidade de usar nossos
            serviços, exceto nos casos previstos por lei.
          </span>

          <span>12. Contato</span>

          <span>
            Caso tenha dúvidas ou preocupações sobre estes Termos de Uso, entre
            em contato conosco:
          </span>

          <span>E-mail: comercial@mypharma.com.br</span>

          <span>Telefone: (11) 3040-7500</span>

          <span>
            Endereço: Rua Olimpiadas, 100 - andar 6, conj. 61, sala 604 - Vila
            Olimpia - São Paulo/SP (04551-000)
          </span>

          <span>
            Ao utilizar os serviços do Whatsapp Farma, você declara que leu,
            compreendeu e aceitou integralmente estes Termos de Uso.
          </span>
        </div>

        <div>
          <Image
            src="/images/logo.svg"
            alt="Logo do Whatsapp Farma"
            width={151.61}
            height={47}
            className="mx-auto"
          />
        </div>
      </div>

      <ExperienceDialog
        open={experience.isOpen}
        onOpenChange={experience.onToggle}
      />
    </section>
  );
}
