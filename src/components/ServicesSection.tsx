import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Home, 
  Sparkles, 
  Trophy, 
  ChevronRight,
  Brain,
  Video,
  Shield,
  Activity,
  HeartHandshake
} from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import dog2 from "@/assets/dog12.jpeg";
import dog3 from "@/assets/dog-3.png";
import dog4 from "@/assets/dog-4.png";
import dog5 from "@/assets/dog20.jpeg";
import dog6 from "@/assets/dog6.jpeg";
import dog7 from "@/assets/dog2.jpeg";
import dog8 from "@/assets/dog8.jpeg";
import dog9 from "@/assets/dog5.jpeg";
import dog10 from "@/assets/dog19.jpeg";

const servicesData = [
  {
    id: "consulta",
    title: "Consulta Comportamental",
    icon: Brain,
    image: dog2,
    imgPos: "object-top", 
    description: "Análise do comportamento e rotina familiar, com orientações práticas.",
    details: "Inclui diagnóstico, manejo e exercícios personalizados. Opção online ou presencial.",
    price: "R$ 200,00", // Valor fixo
    highlight: false
  },
  {
    id: "mentoria",
    title: "Mentoria",
    icon: Video,
    image: dog3,
    imgPos: "object-top", 
    description: "Treine seu cão em casa com acompanhamento profissional mensal.",
    details: "Suporte online para garantir a correta aplicação dos exercícios. Visita domiciliar opcional.",
    price: "A partir de R$ 500,00", // Menor valor (Online)
    highlight: false
  },
  {
    id: "escola-prata",
    title: "Escola Prata",
    icon: BookOpen,
    image: dog4,
    imgPos: "object-top",
    description: "Rotina escolar mensal presencial com atividades físicas, mentais e sociais.",
    details: "Mantém o cão ativo e equilibrado. Planos de 1 a 5x na semana.",
    price: "A partir de R$ 280,00/mês", // Menor valor (1x na semana)
    highlight: false
  },
  {
    id: "escola-ouro",
    title: "Escola Ouro",
    icon: GraduationCap,
    image: dog5,
    imgPos: "object-top", 
    description: "Rotina escolar com adestramento personalizado e socialização guiada.",
    details: "Foco em obediência, bons hábitos e equilíbrio emocional. Planos de 1 a 5x na semana.",
    price: "A partir de R$ 400,00/mês", // Menor valor (1x na semana)
    highlight: true 
  },
  {
    id: "intensivo",
    title: "Intensivo (Internato)",
    icon: Trophy,
    image: dog6,
    imgPos: "object-top", 
    description: "2 meses de imersão hospedada com treinos diários de obediência.",
    details: "Focado em controle e modificação comportamental. Inclui aulas presenciais aos sábados para os tutores.",
    price: "R$ 3.000,00", // Valor fixo
    highlight: false
  },
  {
    id: "trabalho",
    title: "Cães de Trabalho",
    icon: Shield,
    image: dog7,
    imgPos: "object-center",
    description: "Formação avançada de proteção e/ou faro (4 meses de imersão).",
    details: "Exclusivo para cães com genética apta que concluíram o intensivo. Treinamento técnico funcional.",
    price: "R$ 7.000,00", // Valor fixo
    highlight: false
  },
  {
    id: "reabilitacao",
    title: "Reabilitação Canina",
    icon: Activity,
    image: dog8,
    imgPos: "object-top",
    description: "Programa intensivo para cães agressivos ou reativos (2 meses).",
    details: "Controle de gatilhos, dessensibilização e socialização progressiva. Aulas aos sábados para tutores.",
    price: "A partir de R$ 4.000,00", // Menor valor (Pequeno porte)
    highlight: false
  },
  {
    id: "hotel",
    title: "Hotel Educativo",
    icon: Home,
    image: dog9,
    imgPos: "object-top",
    description: "Hospedagem segura com rotina comportamental e recreação dirigida.",
    details: "Avaliação comportamental para cães novos: R$ 50,00. Pacotes especiais para feriados.",
    price: "R$ 75,00 / dia", // Valor da diária
    highlight: false
  },
  {
    id: "banho",
    title: "Estética Animal", // Atualizado de "Banho e Tosa"
    icon: Sparkles,
    image: dog10,
    imgPos: "object-center",
    description: "Banho e tosa com manejo de baixo estresse.",
    details: "Respeitamos o comportamento e os limites de cada cão.",
    price: "Valores sob consulta",
    highlight: false
  }
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="servicos" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solução completa em um só lugar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Na <span className="font-bold text-primary">Cão Santto</span>, cada serviço é planejado para se adequar ao cão e à rotina da família, com soluções personalizadas para cada necessidade. 
          </p>
        </motion.div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all cursor-pointer flex flex-col ${
                  service.highlight ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    Destaque
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${service.imgPos}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col grow">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    {/* Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-foreground mb-4 font-medium">{service.details}</p>
                        
                        {/* Exibe o preço único formatado */}
                        <p className="text-xl font-bold text-primary mb-4">
                          {service.price}
                        </p>

                        <a
                          href={getWhatsAppLink(`Olá! Gostaria de saber mais sobre o serviço de *${service.title}*.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-4 py-3 rounded-lg transition-colors shadow-sm mb-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Quero saber mais
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>

                    {/* Toggle Indicator */}
                    <button className="mt-2 w-full flex items-center justify-between text-sm text-primary font-medium group py-1">
                      <span>{isExpanded ? "Fechar detalhes" : "Ver valores e detalhes"}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-primary/10 rounded-full p-1 group-hover:bg-primary/20 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};