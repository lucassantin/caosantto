import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const MascotPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!hasInteracted) setIsVisible(true);
    }, 1000);

    const loopTimer = setInterval(() => {
      if (!hasInteracted) setIsVisible(true);
    }, 30000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopTimer);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000); 
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      const renderFrame = () => {
        if (!video || video.paused || video.ended || !ctx) return;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];     // Red
          const g = data[i + 1]; // Green
          const b = data[i + 2]; // Blue

          if (g > 100 && g > r * 1.35 && g > b * 1.35) {
            data[i + 3] = 0; 
          }
        }

        ctx.putImageData(frame, 0, 0);

        ctx.clearRect(canvas.width - 130, canvas.height - 70, 130, 70);
        
        animationFrameId.current = requestAnimationFrame(renderFrame);
      };

      video.play().catch(e => console.error("Erro no autoplay:", e));
      
      const setupCanvas = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        renderFrame();
      };

      video.addEventListener("loadedmetadata", setupCanvas);
      video.addEventListener("play", renderFrame);

      return () => {
        video.removeEventListener("loadedmetadata", setupCanvas);
        video.removeEventListener("play", renderFrame);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-0 right-0 z-[9999] md:bottom-6 md:right-6 flex flex-col items-end"
        >
          {/* Contêiner do Mascote - Tamanho aumentado aqui */}
          <div className="relative w-72 md:w-[450px] lg:w-[550px] h-auto pointer-events-none select-none">
            <video
              ref={videoRef}
              src="/mascot-green.mp4" 
              muted
              loop
              playsInline
              crossOrigin="anonymous"
              className="hidden"
            />

            <canvas 
              ref={canvasRef}
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};