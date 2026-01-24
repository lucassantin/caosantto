import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Instagram, MessageCircle, Heart } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import logo from "@/assets/logo-caosantto.jpg";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contato" className="bg-foreground text-background" ref={ref}>
      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full h-64 md:h-80"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.8!2d-51.156!3d-27.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e1499a3e6d7db5%3A0x0!2sRua%2010%20de%20Setembro%2C%202049%2C%20Universit%C3%A1rio%2C%20Videira%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Cão Santto"
        />
      </motion.div>

      {/* Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img
                src={logo}
                alt="Cão Santto"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/70 leading-relaxed max-w-sm">
                Adestramento, hotel educativo e cuidados especializados para 
                transformar a vida do seu cão com amor e ciência.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-lg">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${siteConfig.whatsapp}`}
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppLink(siteConfig.whatsappMessages.default)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-primary" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    @caosantto
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 text-lg">Localização</h4>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.neighborhood}
                  <br />
                  {siteConfig.address.city} - {siteConfig.address.state}
                </address>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50"
          >
            <p>
              © {new Date().getFullYear()} Cão Santto Dog Club. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary" fill="currentColor" /> em Videira - SC
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
