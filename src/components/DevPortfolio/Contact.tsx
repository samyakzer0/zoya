import { motion } from "framer-motion";
import { HyperText } from "../ui/hyper-text";

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
            className="text-center sm:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light pixel-font royal-blue -ml-2 sm:-ml-4 md:-ml-8 lg:-ml-16">
              <span className="inline-block text-[#FFFFF0]">LET'S</span>
              <br />
              <HyperText as="span" className="inline-block royal-blue">CONNECT</HyperText>
            </h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8"
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
                  className="flex items-center gap-2 text-lg text-gray-400 hover:text-royal-blue transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/samyakzer0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-lg text-gray-400 hover:text-royal-blue transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://x.com/samyceo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-lg text-gray-400 hover:text-royal-blue transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

    
          {/* Right - Contact Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-center sm:text-left"
          >
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed pixel-font royal-blue ml-4 sm:ml-8"
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

          </motion.div>
        </div>
      </div>
    </section>
  );
}