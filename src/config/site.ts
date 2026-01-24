export const siteConfig = {
  name: "Cão Santto",
  tagline: "Dog Club",
  description: "Adestramento, Hotel Educativo e Cuidados para Cães",
  
  // Contact
  whatsapp: "5548999659833",
  phone: "(48) 99965-9833",
  
  // Address
  address: {
    street: "Rua 10 de Setembro, 2049",
    neighborhood: "Universitário",
    city: "Videira",
    state: "SC",
    full: "Rua 10 de Setembro, 2049, Universitário, Videira - SC",
  },
  
  // Social
  instagram: "https://instagram.com/caosantto",
  
  // Google Maps
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.8!2d-51.156!3d-27.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzQzLjIiUyA1McKwMDknMjEuNiJX!5e0!3m2!1spt-BR!2sbr!4v1",
  
  // WhatsApp messages
  whatsappMessages: {
    default: "Olá! Gostaria de saber mais sobre os serviços da Cão Santto.",
    video: "Olá, vi o vídeo no site e gostaria de saber mais sobre a Cão Santto.",
    service: (service: string) => `Olá! Tenho interesse no serviço de ${service}. Poderia me passar mais informações?`,
  },
  
  // Navigation
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  
  // Services
  services: [
    {
      id: "adestramento",
      title: "Adestramento",
      description: "Treinamento personalizado para seu cão, com metodologia positiva e resultados duradouros.",
      icon: "GraduationCap",
      details: "Aulas individuais ou em grupo, adaptadas ao perfil do seu pet.",
      highlight: false,
      price: null,
    },
    {
      id: "escola",
      title: "Escola Canina",
      description: "Educação comportamental para filhotes e adultos em ambiente estimulante.",
      icon: "BookOpen",
      details: "Socialização, comandos básicos e avançados, e muito mais.",
      highlight: false,
      price: null,
    },
    {
      id: "hotel",
      title: "Hotel Educativo",
      description: "Hospedagem com atividades educativas, passeios e muito carinho.",
      icon: "Home",
      details: "Ambiente seguro, câmeras 24h e relatórios diários para os tutores.",
      highlight: false,
      price: null,
    },
    {
      id: "banho-tosa",
      title: "Banho e Tosa",
      description: "Higiene e estética para deixar seu pet ainda mais bonito e saudável.",
      icon: "Sparkles",
      details: "Produtos premium e profissionais especializados.",
      highlight: false,
      price: null,
    },
    {
      id: "matilha-k9",
      title: "Matilha K9",
      description: "Programa de adestramento intensivo de 45 dias com resultados transformadores.",
      icon: "Trophy",
      details: "15 dias de adaptação + 30 dias de imersão completa. Investimento: R$ 1.500,00",
      highlight: true,
      price: "R$ 1.500,00",
    },
  ],
  
  // FAQ
  faq: [
    {
      question: "Onde fica a Cão Santto?",
      answer: "Estamos localizados na Rua 10 de Setembro, 2049, no bairro Universitário, em Videira - SC.",
    },
    {
      question: "Quais vacinas meu cão precisa ter?",
      answer: "Para utilizar nossos serviços, seu cão precisa estar com a vacina antirrábica e a V8/V10 em dia. Também recomendamos a vacina contra gripe canina.",
    },
    {
      question: "Qual o horário de funcionamento?",
      answer: "Funcionamos de segunda a sábado, das 7h às 19h. Para o hotel, recebemos e entregamos pets apenas nesses horários.",
    },
    {
      question: "Como funciona o Hotel Educativo?",
      answer: "Seu cão ficará hospedado conosco participando de atividades educativas, socialização e passeios. Enviamos fotos e vídeos diários pelo WhatsApp.",
    },
    {
      question: "Posso acompanhar meu cão durante a hospedagem?",
      answer: "Sim! Temos câmeras de monitoramento e enviamos atualizações diárias para que você fique tranquilo.",
    },
  ],
} as const;

export const getWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
};
