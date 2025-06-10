export const plans = [
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
    },
    disclaimer: "",
  },
];
