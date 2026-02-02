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
import dog2 from "@/assets/dog-2.png";
import dog3 from "@/assets/dog-3.png";
import dog4 from "@/assets/dog-4.png";

const serviceImages = [dog2, dog3, dog4, dog2, dog3, dog4, dog2, dog3, dog4];

const servicesData = [
  {
    id: "consulta",
    title: "Consulta Comportamental",
    icon: Brain,
    description: "Avaliação on-line detalhada do comportamento do cão e perfil familiar.",
    details: "Inclui diagnóstico comportamental, orientações de manejo e plano de treino personalizado.",
    price: "R$ 200,00",
    highlight: false
  },
  {
    id: "mentoria",
    title: "Mentoria Online",
    icon: Video,
    description: "Acompanhamento e suporte online exclusivo durante 1 mês.",
    details: "Garante a correta aplicação dos exercícios e ajustes estratégicos. Visita domiciliar (Videira/SC) tem adicional de R$ 150,00.",
    price: "R$ 500,00",
    highlight: false
  },
  {
    id: "escola-prata",
    title: "Escola Prata",
    icon: BookOpen,
    description: "Rotina escolar presencial com atividades físicas, mentais e sociais.",
    details: "Indicada para cães sociáveis. Planos de 1 a 5x na semana.",
    priceList: [
      "1x/semana: R$ 280,00/mês",
      "2x/semana: R$ 350,00/mês",
      "3x/semana: R$ 420,00/mês",
      "5x/semana: R$ 700,00/mês"
    ],
    highlight: false
  },
  {
    id: "escola-ouro",
    title: "Escola Ouro",
    icon: GraduationCap,
    description: "Adestramento estruturado e socialização controlada (foco em obediência).",
    details: "Foco em bons hábitos e equilíbrio emocional. Planos de 1 a 5x na semana.",
    priceList: [
      "1x/semana: R$ 400,00/mês",
      "2x/semana: R$ 500,00/mês",
      "3x/semana: R$ 600,00/mês",
      "5x/semana: R$ 1.000,00/mês"
    ],
    highlight: true 
  },
  {
    id: "intensivo",
    title: "Intensivo (Internato)",
    icon: Trophy,
    description: "Programa de 2 meses de imersão hospedada com treinos diários.",
    details: "Focado em controle e modificação comportamental. Inclui aulas presenciais aos sábados para os tutores.",
    price: "R$ 3.000,00",
    highlight: false
  },
  {
    id: "trabalho",
    title: "Cães de Trabalho",
    icon: Shield,
    description: "Formação de cães de proteção pessoal e/ou faro (4 meses de imersão).",
    details: "Para cães >6 meses com intensivo concluído. Treinamento técnico focado em funcionalidade e confiabilidade.",
    price: "R$ 7.000,00",
    highlight: false
  },
  {
    id: "reabilitacao",
    title: "Reabilitação Canina",
    icon: Activity,
    description: "Programa intensivo para cães agressivos ou reativos (2 meses).",
    details: "Controle de gatilhos e dessensibilização. Preços variam por porte:",
    priceList: [
      "Pequeno: R$ 4.000,00",
      "Médio: R$ 6.000,00",
      "Grande: R$ 9.000,00"
    ],
    highlight: false
  },
  {
    id: "hotel",
    title: "Hotel Educativo",
    icon: Home,
    description: "Hospedagem segura com rotina comportamental equilibrada.",
    details: "Recreação dirigida. Avaliação para cães novos: R$ 50,00.",
    price: "R$ 75,00 / dia",
    highlight: false
  },
  {
    id: "banho",
    title: "Banho e Tosa",
    icon: Sparkles,
    description: "Higiene com manejo de baixo estresse.",
    details: "Respeitamos o comportamento e limites de cada cão.",
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
            Cuidado completo em um só lugar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Na <span className="font-bold text-primary">Cão Santto</span>, cada serviço é planejado para formar cães equilibrados, confiáveis e verdadeiro parceiros de vida. 
          </p>
        </motion.div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;
            const image = serviceImages[index % serviceImages.length];

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

                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                        
                        {/* Render Price List OR Single Price */}
                        {service.priceList ? (
                          <ul className="mb-4 space-y-1">
                            {service.priceList.map((priceItem, idx) => (
                              <li key={idx} className="text-sm text-primary font-semibold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                {priceItem}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          service.price && (
                            <p className="text-xl font-bold text-primary mb-4">
                              {service.price}
                            </p>
                          )
                        )}

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