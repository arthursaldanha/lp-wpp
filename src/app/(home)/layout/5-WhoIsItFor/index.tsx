import { div } from "framer-motion/client";
import Image from "next/image";

const cards = [
  {
    title: "Cadastro e ativação",
    description: "Configuramos sua conta na API oficial do Whatsapp",
  },
  {
    title: "Criação de fluxos inteligentes",
    description:
      "Desenvolvemos chatbots e automações personalizadas para sua farmácia",
  },
  {
    title: "Integração com seu catálogo e sistema",
    description: "Sincronizamos os produtos e pedidos diretamente no Whatsapp",
  },
  {
    title: "Monitoramento e suporte contínuo",
    description:
      "Acompanhamos a perfomance e otimizamos os processos para garantir a melhor experiência",
  },
];

export const WhoIsItFor: React.FC = () => {
  return (
    <section className="mt-40 p-20 space-y-20 bg-[#F6FFF1]">
      <div className="space-y-6 text-center">
        <div className="text-gray-800 text-3xl font-medium">
          <h3>
            Pronto para transformar o WhatsApp <br /> em sua melhor ferramenta
            de vendas?
          </h3>
        </div>

        <div className="text-gray-800 text-2xl font-medium">
          <h3>
            Comece agora com nosso plano gratuito, sem precisar de <br /> cartão
            e com suporte desde o primeiro clique
          </h3>
        </div>
      </div>

      <div className="flex items-stretch gap-4">
        {cards.map(({ title, description }, index) => (
          <div
            key={title}
            className="flex-1 px-4 py-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-6"
          >
            <div className="w-14 h-14 relative inline-flex justify-center items-center bg-blue-600 rounded-full overflow-hidden">
              <span className="text-white text-3xl font-medium">
                {index + 1}
              </span>
            </div>

            <div className="min-h-16 text-neutral-900 text-2xl font-semibold">
              <span>{title}</span>
            </div>

            <div className="text-gray-800 text-lg font-normal">
              <span>{description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="px-6 py-4 bg-blue-600 rounded-full inline-flex justify-center items-center gap-2">
          <Image
            src="/images/home/spoke.png"
            alt="Ícone de um raio"
            width={24}
            height={24}
          />

          <div className="justify-center text-white text-2xl font-medium leading-normal">
            Quero automatizar meu WhatsApp agora
          </div>
        </div>
      </div>
    </section>
  );
};
