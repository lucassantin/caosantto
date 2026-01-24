import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Metodologia Positiva",
    description:
      "Treinamento baseado em reforço positivo, respeitando o bem-estar do seu pet.",
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description:
      "Estrutura completa com monitoramento 24h e equipe preparada para cuidar do seu cão.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description:
      "Metodologia eficiente que traz resultados visíveis em poucas semanas.",
  },
  {
    icon: Users,
    title: "Socialização",
    description:
      "Seu cão aprende a conviver com outros pets e pessoas de forma saudável.",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que nos escolher?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Na Cão Santto, cada detalhe é pensado para proporcionar a melhor
            experiência para você e seu pet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-lg transition-shadow group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
              >
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
