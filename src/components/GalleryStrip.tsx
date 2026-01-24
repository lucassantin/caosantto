import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dog1 from "@/assets/dog-1.png";
import dog4 from "@/assets/dog-4.png";

const images = [dog1, dog4, dog1, dog4];

export const GalleryStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-8 bg-background overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="flex gap-4 px-4"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex-shrink-0 w-40 md:w-56 aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src={img}
              alt={`Cão na Cão Santto ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
