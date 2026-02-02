import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import dogPng1 from "@/assets/dog-1.png";
import dogPng2 from "@/assets/dog-2.png";
import dogPng3 from "@/assets/dog-3.png";
import dogPng4 from "@/assets/dog-4.png";
import dogPng5 from "@/assets/dog-5.png";

import dog1 from "@/assets/dog1.jpeg";
import dog2 from "@/assets/dog2.jpeg";
import dog3 from "@/assets/dog3.jpeg";
import dog4 from "@/assets/dog4.jpeg";
import dog5 from "@/assets/dog5.jpeg";
import dog6 from "@/assets/dog6.jpeg";
import dog7 from "@/assets/dog7.jpeg";
import dog8 from "@/assets/dog8.jpeg";
import dog9 from "@/assets/dog9.jpeg";
import dog10 from "@/assets/dog10.jpeg";
import dog11 from "@/assets/dog11.jpeg";
import dog12 from "@/assets/dog12.jpeg";
import dog13 from "@/assets/dog13.jpeg";
import dog14 from "@/assets/dog14.jpeg";
import dog15 from "@/assets/dog15.jpeg";
import dog16 from "@/assets/dog16.jpeg";
import dog17 from "@/assets/dog17.jpeg";
import dog18 from "@/assets/dog18.jpeg";
import dog19 from "@/assets/dog19.jpeg";
import dog20 from "@/assets/dog20.jpeg";

const images = [
  { src: dogPng1, alt: "Cão feliz na Cão Santto PNG 1" },
  { src: dogPng2, alt: "Cão feliz na Cão Santto PNG 2" },
  { src: dogPng3, alt: "Cão feliz na Cão Santto PNG 3" },
  { src: dogPng4, alt: "Cão feliz na Cão Santto PNG 4" },
  { src: dogPng5, alt: "Cão feliz na Cão Santto PNG 5" },
  { src: dog1, alt: "Cão feliz na Cão Santto 1" },
  { src: dog2, alt: "Cão feliz na Cão Santto 2" },
  { src: dog3, alt: "Cão feliz na Cão Santto 3" },
  { src: dog4, alt: "Cão feliz na Cão Santto 4" },
  { src: dog5, alt: "Cão feliz na Cão Santto 5" },
  { src: dog6, alt: "Cão feliz na Cão Santto 6" },
  { src: dog7, alt: "Cão feliz na Cão Santto 7" },
  { src: dog8, alt: "Cão feliz na Cão Santto 8" },
  { src: dog9, alt: "Cão feliz na Cão Santto 9" },
  { src: dog10, alt: "Cão feliz na Cão Santto 10" },
  { src: dog11, alt: "Cão feliz na Cão Santto 11" },
  { src: dog12, alt: "Cão feliz na Cão Santto 12" },
  { src: dog13, alt: "Cão feliz na Cão Santto 13" },
  { src: dog14, alt: "Cão feliz na Cão Santto 14" },
  { src: dog15, alt: "Cão feliz na Cão Santto 15" },
  { src: dog16, alt: "Cão feliz na Cão Santto 16" },
  { src: dog17, alt: "Cão feliz na Cão Santto 17" },
  { src: dog18, alt: "Cão feliz na Cão Santto 18" },
  { src: dog19, alt: "Cão feliz na Cão Santto 19" },
  { src: dog20, alt: "Cão feliz na Cão Santto 20" },
];

export const GalleryStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 bg-background overflow-hidden" ref={ref}>
      <div className="container-custom px-4">
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
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-soft group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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