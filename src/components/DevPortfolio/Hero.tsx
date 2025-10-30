import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/transitions';

export const Hero = () => {
  const techStack = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Full Stack Developer
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12"
        >
          Building scalable applications with modern technologies
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg font-mono text-sm sm:text-base border border-gray-700 hover:border-blue-500 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
