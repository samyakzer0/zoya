import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/transitions';
import { useRef } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  year: string;
  role: string;
  description: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'FinTech App Redesign',
    client: 'MoneyFlow Inc.',
    year: '2024',
    role: 'Lead Designer',
    description: 'Complete redesign of mobile banking app, improving user engagement by 60% and reducing transaction time by 40%.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Healthcare Platform',
    client: 'MediCare Plus',
    year: '2024',
    role: 'UX/UI Designer',
    description: 'Designed an intuitive patient management system that streamlined workflows for 100+ medical facilities.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'E-Learning Experience',
    client: 'EduTech Global',
    year: '2023',
    role: 'Product Designer',
    description: 'Created an engaging learning platform that increased student retention by 75% through gamification.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Travel Booking App',
    client: 'Wanderlust Co.',
    year: '2023',
    role: 'UI Designer',
    description: 'Designed a seamless booking experience that increased conversions by 45% and won App of the Year.',
    gradient: 'from-orange-500 to-red-500',
  },
];

export const CaseStudies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center px-2"
          >
            Case Studies
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 text-center px-2"
          >
            Deep dives into selected projects
          </motion.p>
        </motion.div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[90vw] sm:w-[70vw] lg:w-[500px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full">
                  <div className={`h-40 sm:h-48 md:h-64 bg-gradient-to-br ${study.gradient} flex items-center justify-center p-4`}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center px-4">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500 mb-1">Client</div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900">{study.client}</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500 mb-1">Year</div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900">{study.year}</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500 mb-1">Role</div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900">{study.role}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {study.description}
                    </p>
                    
                    <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                      Read Full Case Study →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {caseStudies.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
        
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};
