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
import dog8 from "@/assets/reabilitação.jpeg";
import dog9 from "@/assets/dog5.jpeg";
import dog10 from "@/assets/dog19.jpeg";

const servicesData = [
  {
    id: "consulta",
    title: "Consulta Comportamental",
    icon: Brain,
    image: dog10,
    imgPos: "object-top", 
    details: "Análise do comportamento e da rotina familiar, com orientações práticas de manejo e exercícios personalizados para cada objetivo.",
    price: "A partir de R$ 200,00", // Valor fixo
    highlight: false
  },
  {
    id: "mentoria",
    title: "Mentoria",
    icon: Video,
    image: dog3,
    imgPos: "object-top", 
    details: "Treine em casa com acompanhamento profissional mensal e veja a evolução real por meio da correta aplicação dos exercícios.",
    price: "A partir de R$ 500,00", // Menor valor (Online)
    highlight: false
  },
  {
    id: "escola-prata",
    title: "Escola Prata",
    icon: BookOpen,
    image: dog4,
    imgPos: "object-top",
    details: "Rotina escolar mensal presencial com atividades físicas, mentais e sociais, mantendo o cão ativo e equilibrado.",
    price: "A partir de R$ 280,00/mês", // Menor valor (1x na semana)
    highlight: false
  },
  {
    id: "escola-ouro",
    title: "Escola Ouro",
    icon: GraduationCap,
    image: dog5,
    imgPos: "object-top", 
    details: "Rotina escolar mensal presencial com adestramento personalizado e socialização guiada, focada em obediência, bons hábitos e equilíbrio emocional.",
    price: "A partir de R$ 400,00/mês", // Menor valor (1x na semana)
    highlight: true 
  },
  {
    id: "intensivo",
    title: "Intensivo",
    icon: Trophy,
    image: dog9,
    imgPos: "object-top", 
    details: "Programa intensivo de obediência em nosso centro de treinamento, com 2 meses de imersão hospedada e treinos diários focados em controle e modificação comportamental. Os responsáveis participam de aulas presenciais aos sábados, garantindo entendimento completo do processo.",
    price: "R$ 4.000,00", // Valor fixo
    highlight: false
  },
  {
    id: "trabalho",
    title: "Anjo da Guarda",
    icon: Shield,
    image: dog7,
    imgPos: "object-center",
    details: "Programa avançado para formação de cães de trabalho em nosso centro de treinamento, com 2 meses de imersão hospedada, voltados à guarda e proteção familiar. Exclusivo para cães que tenham concluído o programa intensivo e apresentem genética apta.Os responsáveis participam de aulas presenciais aos sábados, garantindo entendimento completo do processo.",
    price: "R$ 8.000,00", // Valor fixo
    highlight: false
  },
  {
    id: "reabilitacao",
    title: "Reabilitação Canina",
    icon: Activity,
    image: dog8,
    imgPos: "object-top",
    details: "Programa intensivo para reabilitação de cães agressivos ou reativos, com 2 meses de imersão hospedada e treinos diários focados em controle de gatilhos, dessensibilização e socialização progressiva. Os responsáveis participam de aulas presenciais todos os sábados, garantindo entendimento completo do processo.",
    price: "A partir de R$ 4.000,00", // Menor valor (Pequeno porte)
    highlight: false
  },
  {
    id: "hotel",
    title: "Hotel Educativo",
    icon: Home,
    image: dog6,
    imgPos: "object-top",
    details: "Hospedagem segura e supervisionada, com rotina comportamental equilibrada, recreação dirigida e socialização guiada.",
    price: "Diárias por R$ 75,00", // Valor da diária
    highlight: false
  },
  {
    id: "banho",
    title: "Estética Animal", // Atualizado de "Banho e Tosa"
    icon: Sparkles,
    image: dog2,
    imgPos: "object-top",
    details: "Banho e tosa com manejo de baixo estresse, respeitando o comportamento e os limites de cada cão.",
    price: "Apartir de R$ 50,00", // Valor fixo
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
                <div className="relative h-72 overflow-hidden shrink-0">
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