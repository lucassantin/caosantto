import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Instagram, MessageCircle, Heart, Clock } from "lucide-react";
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
          src="https://maps.google.com/maps?q=Rua+10+de+Setembro,+2049+-+Universit%C3%A1rio,+Videira+-+SC&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 text-lg">Horário de funcionamento</h4>
              <div className="flex items-start gap-3 text-background/70">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {siteConfig.workingHours}
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
              Feito com <Heart className="w-4 h-4 text-primary" fill="currentColor" /> por{" "}
              <a
                href="https://wa.me/5548988247011?text=Olá,%20vim%20através%20do%20site%20da%20Cão%20Santto%20e%20tenho%20interesse%20em%20seu%20trabalho!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                Lucas Santin
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};