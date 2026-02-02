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
    }, 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopTimer);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 7500); 
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
        const length = data.length;

        for (let i = 0; i < length; i += 4) {
          const r = data[i];     
          const g = data[i + 1]; 
          const b = data[i + 2]; 

          if (g > 100 && g > r * 1.4 && g > b * 1.4) {
            data[i + 3] = 0; 
          }
        }

        ctx.putImageData(frame, 0, 0);

        ctx.clearRect(canvas.width - 130, canvas.height - 70, 130, 70);
        
        animationFrameId.current = requestAnimationFrame(renderFrame);
      };

      video.play().catch(e => console.log("Erro no autoplay:", e));
      
      const onPlay = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        renderFrame();
      };

      video.addEventListener("play", onPlay);

      return () => {
        video.removeEventListener("play", onPlay);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      };
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-4 right-4 z-[9999] md:bottom-8 md:right-8 flex flex-col items-end"
        >
          <div className="relative w-40 md:w-56 h-auto pointer-events-none">
            <video
              ref={videoRef}
              src="/mascot-green.mp4" 
              muted
              playsInline
              crossOrigin="anonymous"
              style={{ display: "none" }}
            />

            <canvas 
              ref={canvasRef}
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};