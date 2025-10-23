'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NeonDividerProps {
  height?: number;
  className?: string;
  variant?: 'straight' | 'zigzag' | 'glare';
}

const NeonDivider = ({
  height = 4,
  className = '',
  variant = 'straight'
}: NeonDividerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw the neon effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = height;

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = height;
        drawNeonEffect();
      }
    };

    window.addEventListener('resize', handleResize);

    // Draw the neon effect based on variant
    const drawNeonEffect = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (variant === 'straight') {
        // Animation variables
        let time = 0;
        let animationFrameId: number;
        let nextGlareTime = Math.random() * 3 + 2; // Random time for first glare (2-5 seconds)

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Solid neon with occasional glare
          let intensity = 1.0; // Default solid intensity

          // Create glare effect at random intervals
          if (time > nextGlareTime) {
            intensity = 1.5; // Brighter during glare

            // Reset for next glare
            if (time > nextGlareTime + 0.3) { // Glare lasts 0.3 seconds
              nextGlareTime = time + Math.random() * 5 + 2; // Next glare in 2-7 seconds
            }
          }

          // Create gradient for the solid line
         // In the 'glare' variant section, replace the gradient setup:
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, `rgba(59, 130, 246, ${0.7 * intensity})`);
gradient.addColorStop(0.5, `rgba(59, 130, 246, ${1.0 * intensity})`);
gradient.addColorStop(1, `rgba(59, 130, 246, ${0.7 * intensity})`);

ctx.fillStyle = gradient;
ctx.shadowColor = '#3b82f6';
ctx.shadowBlur = 20; // Increased from 10 to 20
ctx.fillRect(0, 0, canvas.width, height);


          time += 0.02;
          animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
      else if (variant === 'zigzag') {
        // Animation variables
        let time = 0;
        let animationFrameId: number;
        let nextGlareTime = Math.random() * 3 + 2; // Random time for first glare

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const zigzagWidth = 20;
          const zigzagHeight = height * 2;
          const segments = Math.ceil(canvas.width / zigzagWidth);

          ctx.beginPath();
          ctx.moveTo(0, height / 2);

          for (let i = 0; i < segments; i++) {
            const x1 = i * zigzagWidth;
            const x2 = (i + 0.5) * zigzagWidth;
            const x3 = (i + 1) * zigzagWidth;

            ctx.lineTo(x1, height / 2);
            ctx.lineTo(x2, (i % 2 === 0 ? 0 : height));
            ctx.lineTo(x3, height / 2);
          }

          // Solid color with occasional glare
          let intensity = 1.0;

          // Create glare effect at random intervals
          if (time > nextGlareTime) {
            intensity = 1.5; // Brighter during glare

            // Reset for next glare
            if (time > nextGlareTime + 0.3) {
              nextGlareTime = time + Math.random() * 5 + 2;
            }
          }

          ctx.strokeStyle = `rgba(59, 130, 246, ${intensity})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 10 * intensity;
          ctx.stroke();

          time += 0.02;
          animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
      else if (variant === 'glare') {
        // Animation variables
        let time = 0;
        let animationFrameId: number;
        let glarePosition = -100; // Start off-screen
        let nextGlareTime = Math.random() * 3 + 2; // Random time for first glare

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, height);

          // Draw solid base line
          ctx.fillStyle = 'rgba(59, 130, 246, 1.0)';
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 20;
          ctx.fillRect(0, 0, canvas.width, height);

          // Create glare effect that moves across the line
          if (time > nextGlareTime) {
            // Start glare movement
            if (glarePosition === -100) {
              glarePosition = 0;
            }

            // Move glare across the line
            const glareWidth = canvas.width * 0.2;
            const glareGradient = ctx.createLinearGradient(
              glarePosition - glareWidth/2, 0,
              glarePosition + glareWidth/2, 0
            );

            glareGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            glareGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.7)');
            glareGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = glareGradient;
            ctx.fillRect(0, 0, canvas.width, height);

            glarePosition += canvas.width / 150; // Speed of glare movement

            // Reset when glare moves off screen
            if (glarePosition > canvas.width + 100) {
              glarePosition = -100;
              nextGlareTime = time + Math.random() * 5 + 2; // Next glare in 2-7 seconds
            }
          }

          time += 0.02;
          animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
    };

    const cleanup = drawNeonEffect();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanup) cleanup();
    };
  }, [height, variant]);

  return (
    <motion.div
      className={`w-full !border-0 !outline-none !m-0 !p-0 !shadow-none ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ boxShadow: 'none' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full block  !m-0 !p-0 !shadow-none"
        height={height}
        style={{ border: 'none', outline: 'none', margin: 0, padding: 0, boxShadow: 'none' }}
      />
    </motion.div>
  );
};

export default NeonDivider;