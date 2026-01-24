import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import matheusProfile from "@/assets/matheus-profile.png";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent rounded-[2rem] transform rotate-3" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={matheusProfile}
                  alt="Matheus Andriolli - Fundador da Cão Santto"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 md:-right-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-glow"
              >
                <span className="text-sm font-semibold">+500 cães treinados</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-semibold mb-3">
              Quem comanda a matilha?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Matheus Andriolli
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Apaixonado por cães desde sempre, Matheus transformou essa paixão 
                em missão de vida. Com formação especializada em comportamento 
                canino e anos de experiência prática, ele fundou a Cão Santto para 
                oferecer um espaço único onde cães são tratados com amor, respeito 
                e ciência.
              </p>
              <p>
                Na Cão Santto, cada cão é tratado como parte da família. Nosso 
                método combina técnicas modernas de adestramento positivo com um 
                ambiente acolhedor, garantindo que seu pet desenvolva todo seu 
                potencial enquanto se diverte.
              </p>
              <p>
                O resultado? Cães mais equilibrados, felizes e uma conexão ainda 
                mais forte entre você e seu melhor amigo.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Cães treinados</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
