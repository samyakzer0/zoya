import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/transitions';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions', 'Terraform'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Postman', 'Figma', 'Linear', 'Slack'],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-400 mb-12 sm:mb-16 text-center"
          >
            Tools and technologies I work with
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={fadeInUp}
                className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">
                  {skill.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-gray-900 text-gray-300 rounded-lg text-sm sm:text-base hover:text-white hover:bg-gray-700 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-gray-400 text-base sm:text-lg mb-6">
              Always learning and exploring new technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="px-4 py-2 bg-gray-800 text-yellow-400 rounded-lg font-mono text-sm sm:text-base border border-yellow-600">
                Currently Learning: Rust
              </span>
              <span className="px-4 py-2 bg-gray-800 text-green-400 rounded-lg font-mono text-sm sm:text-base border border-green-600">
                Exploring: Web3
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
