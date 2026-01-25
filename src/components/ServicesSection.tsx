import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, BookOpen, Home, Sparkles, Trophy, ChevronRight } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import dog2 from "@/assets/dog-2.png";
import dog3 from "@/assets/dog-3.png";
import dog4 from "@/assets/dog-4.png";

const iconMap = {
  GraduationCap,
  BookOpen,
  Home,
  Sparkles,
  Trophy,
};

const serviceImages = [dog2, dog3, dog4, dog2, dog4];

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
            O melhor para seu pet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para atender todas as 
            necessidades do seu cão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isExpanded = expandedId === service.id;
            const image = serviceImages[index % serviceImages.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all cursor-pointer ${
                  service.highlight ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Destaque
                  </div>
                )}

                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-foreground mb-3">{service.details}</p>
                      {service.price && (
                        <p className="text-xl font-bold text-primary mb-3">
                          {service.price}
                        </p>
                      )}
                      <a
                        href={getWhatsAppLink(siteConfig.whatsappMessages.service(service.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Quero saber mais
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Toggle Indicator */}
                  <button className="mt-2 text-sm text-primary font-medium flex items-center gap-1">
                    {isExpanded ? "Ver menos" : "Ver detalhes"}
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
