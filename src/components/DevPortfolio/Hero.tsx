import { motion } from "framer-motion";
import Particles from "./Particles";
import { HyperText } from "../ui/hyper-text";

export default function DevHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 md:py-20 bg-black">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={[ '#ffffff']}
          particleCount={200}
          particleSpread={15}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Light rays effect */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-royal-blue/10"></div>
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-royal-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-royal-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl sm:max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 pixel-font royal-blue">
            <span className="inline-block text-[#FFFFF0]">ZOYA IMAM</span>
            <br />
            <HyperText as="span" className="inline-block royal-blue">DEVELOPER</HyperText>
            <br />

          </h1>

          <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light px-4">
            I'm an AI-powered indie builder who turns ideas into MVPs in days using tools like ChatGPT, Cursor IDE, and Vercel. I ideate, prompt, build, and ship — all solo — blending product thinking with AI automation.
          </p>

          

         

         

          
        </motion.div>
      </div>
    </section>
  );
}