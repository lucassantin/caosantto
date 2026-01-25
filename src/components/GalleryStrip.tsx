import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dog1 from "@/assets/dog-1.png";
import dog2 from "@/assets/dog-2.png";
import dog3 from "@/assets/dog-3.png";
import dog4 from "@/assets/dog-4.png";
import dog5 from "@/assets/dog-5.png";

const images = [
  { src: dog1, alt: "Cão feliz na Cão Santto 1" },
  { src: dog2, alt: "Cão feliz na Cão Santto 2" },
  { src: dog3, alt: "Cão feliz na Cão Santto 3" },
  { src: dog4, alt: "Cão feliz na Cão Santto 4" },
  { src: dog5, alt: "Cão feliz na Cão Santto 5" },
];

export const GalleryStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 bg-background overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-primary font-semibold mb-2">
            Galeria
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Momentos especiais
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative" 
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="flex left-2 md:-left-4 bg-white/90 hover:bg-white border-border shadow-soft z-10" />
            <CarouselNext className="flex right-2 md:-right-4 bg-white/90 hover:bg-white border-border shadow-soft z-10" />
            
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};