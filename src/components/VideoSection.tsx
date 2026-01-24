import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import dog5 from "@/assets/dog-5.png";

export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-primary font-semibold mb-3">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja a transformação na prática
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe o progresso dos nossos alunos e veja como a metodologia 
            Cão Santto faz a diferença.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            {/* Thumbnail */}
            <img
              src={dog5}
              alt="Vídeo de transformação"
              className="w-full aspect-video object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            
            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => window.open("https://instagram.com/caosantto", "_blank")}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href={getWhatsAppLink(siteConfig.whatsappMessages.video)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-glow animate-pulse-soft"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar Avaliação no WhatsApp
          </motion.a>
          <p className="mt-4 text-muted-foreground text-sm">
            Resposta rápida • Atendimento personalizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};
