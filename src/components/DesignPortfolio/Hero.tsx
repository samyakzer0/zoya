import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { OpenSourceSlider } from "../ui/dynamic-text-slider";

export default function DesignHero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setRotation({ x: y * 15, y: x * 15 }); // Adjust 15 for tilt sensitivity
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Neobrutalism Background Elements */}
      <div className="absolute inset-0 bg-[url('/graffiti-bg.png')] bg-cover bg-center bg-[#FAFAF9]/20">
        
      </div>
<div className="relative z-10 max-w-6xl mx-auto text-center" style={{ perspective: '1000px' }}>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.img
      ref={imageRef}
      src="/zoya-logo.png"
      alt="Zoya Logo"
      className="mx-auto w-full h-auto"
      style={{
        maxWidth: '730.8px',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  </motion.div>
  <div className="mt-10 flex justify-center">
    <OpenSourceSlider width={400} onChange={() => {}} />
  </div>
</div>
    </section>
  );
}