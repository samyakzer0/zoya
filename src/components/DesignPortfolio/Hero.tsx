import { motion } from "framer-motion";
import { Sparkles, Heart, Zap } from "lucide-react";

export default function DesignHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Neobrutalism Background Elements */}
      <div className="absolute inset-0 bg-[#FAFAF9]">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full"
          animate={{
            y: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "8px 8px 0px #000" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-pink-500 rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 55, 45]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "6px 6px 0px #000" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-400 rounded-2xl"
          animate={{
            x: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "10px 10px 0px #000" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-8 px-6 py-3 bg-white rounded-2xl border-4 border-black"
            style={{ boxShadow: "6px 6px 0px #000" }}
            whileHover={{ boxShadow: "8px 8px 0px #000", y: -2 }}
          >
            <span className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Creative Designer
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6">
            <span className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white transform -rotate-2 border-4 border-black"
              style={{ boxShadow: "12px 12px 0px #000" }}>
              BOLD
            </span>
            <br />
            <span className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white transform rotate-1 border-4 border-black mt-4"
              style={{ boxShadow: "12px 12px 0px #000" }}>
              DESIGNS
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold mb-12 max-w-3xl mx-auto">
            Crafting unforgettable visual experiences with a punch of personality
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              className="flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-black text-lg rounded-2xl border-4 border-black"
              style={{ boxShadow: "6px 6px 0px #000" }}
              whileHover={{ boxShadow: "8px 8px 0px #000", y: -2 }}
              whileTap={{ boxShadow: "4px 4px 0px #000", y: 0 }}
            >
              <Heart className="w-6 h-6" />
              View Work
            </motion.button>
            <motion.button
              className="flex items-center gap-3 px-8 py-4 bg-pink-500 text-white font-black text-lg rounded-2xl border-4 border-black"
              style={{ boxShadow: "6px 6px 0px #000" }}
              whileHover={{ boxShadow: "8px 8px 0px #000", y: -2 }}
              whileTap={{ boxShadow: "4px 4px 0px #000", y: 0 }}
            >
              <Zap className="w-6 h-6" />
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}