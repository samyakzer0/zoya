import { motion } from "framer-motion";
import { HyperText } from "../ui/hyper-text";
import NeonDivider from "../ui/neon-divider";

export default function DevContact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-black relative overflow-hidden">
      {/* Light rays effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-transparent to-royal-blue/10"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-royal-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-royal-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl sm:max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light pixel-font royal-blue -ml-4 sm:-ml-8 md:-ml-16 lg:-ml-38">
              <span className="inline-block text-[#FFFFF0]">LET'S</span>
              <br />
              <HyperText as="span" className="inline-block royal-blue">CONNECT</HyperText>
            </h2>
          </motion.div>

    
          {/* Right - Contact Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed pixel-font royal-blue"
            >
              Ready to build the future with AI?
            </motion.h3>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:samyak.sage@gmail.com?subject=Let's Build Something Amazing&body=Hi Samyak, I'd love to discuss a project with you."
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
                className="inline-block border-2 border-royal-blue text-white bg-transparent px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer hover:bg-royal-blue hover:text-white"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <div className="bg-black border-0 outline-none m-0 p-0 py-8">
              <div className="max-w-4/5 mx-auto">
                <NeonDivider variant="glare" height={2} className="md:h-3" />
              </div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-transparent"
            >
              <div className="text-sm text-gray-400 mb-4">
                Available For Work
              </div>

              <div className="space-y-3">
                <motion.a
                  href="https://github.com/samyakzer0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center text-base sm:text-lg text-gray-400 hover:text-royal-blue transition-colors"
                >
                  GitHub
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/samyakzer0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center text-lg text-gray-400 hover:text-royal-blue transition-colors"
                >
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://x.com/samyceo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center text-lg text-gray-400 hover:text-royal-blue transition-colors"
                >
                  Twitter
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}