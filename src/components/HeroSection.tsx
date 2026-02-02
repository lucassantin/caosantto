import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cães felizes na Cão Santto"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
          >
            Dog Club • Videira SC
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Para nós, o vínculo entre
            humanos e cães é{" "}
            <span className="text-primary">sagrado</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
            Adestramento, hotel educativo e cuidados especializados para o 
            bem-estar e felicidade do seu cão.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
