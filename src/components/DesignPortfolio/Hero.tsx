import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/transitions';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
        >
          Creative Designer
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          Crafting beautiful and intuitive digital experiences that users love
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">30+</div>
            <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#gallery"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white hover:bg-gray-50 text-purple-600 font-semibold rounded-lg border-2 border-purple-600 transition-colors shadow-lg"
          >
            Let's Talk
          </a>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          className="mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Specializing in</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['UI/UX Design', 'Brand Identity', 'Web Design', 'Mobile Design'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white text-purple-600 rounded-full text-sm sm:text-base font-medium shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
