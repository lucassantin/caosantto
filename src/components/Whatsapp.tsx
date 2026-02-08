import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const phoneNumber = "5548999659833"; 
  const message = "Olá! Vim pelo site.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
        
        animate={{
          y: [0, -8, 0],      
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,        
          repeat: Infinity,    
          ease: "easeInOut",
        }}
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.11.55 4.12 1.6 5.91L2 22l4.09-1.6C7.88 21.45 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.28.14-1.64.84-1.89.94-.25.1-.44.14-.63-.14-.19-.28-.73-.94-.89-1.13-.16-.19-.32-.22-.6-.07-.28.14-1.18.46-2.25 1.4-.83.7-1.56 1.07-1.88.94-.32-.14-.7-.56-.7-1.07 0-.5.18-1.06.4-1.52.22-.46 1.04-1.4 1.26-1.68.22-.28.3-.48.22-.66-.08-.18-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.5c-.16 0-.42.06-.64.3-.22.24-.84 1.04-.84 2.54 0 1.5 1.08 2.94 1.23 3.14.15.2 2.1 3.21 5.09 4.5.3.13.53.21.71.27.6.2 1.14.17 1.57.1.43-.07 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.06-.09-.22-.14-.5-.28z" />
        </svg>
      </motion.a>
    </div>
  );
};