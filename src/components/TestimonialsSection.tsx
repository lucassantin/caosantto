import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Júlia Corrêa",
    role: "Tutora do Thor, Luna, Nala e Mel",
    content: "Excelente trabalho! Meus 4 cães estão sendo adestrados e definitivamente não são mais os mesmos. Mateus é um excelente profissional, respeitoso e sempre muito solícito. Recomendo de olhos de fechados :)",
    rating: 5,
  },
  {
    id: 2,
    name: "Marana baseggio",
    role: "Tutora da flor",
    content: "ótimo profissional, trabalho responsável com os cães, orientação assertiva em todos os comportamentos. Super indico este profissional. Não só a ética mas também o grande amor e carinho com os animais é visível e faz toda diferença no trabalho.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jordana Meneguzzi",
    role: "Tutora do Macuquin",
    content: "Eu e o Macuquin adquirimos muito conhecimento durante o processo! Macuquin está muito bem condicionado em todos os sentidos! Amamos o Matheus, a Mauí e a Ísis! O lugar é incrível!",
    rating: 5,
  }
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem os tutores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de quem confiou o cuidado e educação do seu melhor amigo à Cão Santto.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border/50 flex flex-col relative group hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};