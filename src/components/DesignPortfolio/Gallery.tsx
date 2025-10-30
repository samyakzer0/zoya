import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/transitions';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  color: string;
  height: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Brand Identity for Tech Startup', category: 'Branding', color: 'from-purple-400 to-pink-400', height: 'h-64' },
  { id: 2, title: 'E-Commerce Mobile App', category: 'UI/UX', color: 'from-blue-400 to-cyan-400', height: 'h-80' },
  { id: 3, title: 'SaaS Dashboard Design', category: 'Web Design', color: 'from-green-400 to-emerald-400', height: 'h-72' },
  { id: 4, title: 'Restaurant Website', category: 'Web Design', color: 'from-orange-400 to-red-400', height: 'h-64' },
  { id: 5, title: 'Fashion Brand Guidelines', category: 'Branding', color: 'from-pink-400 to-rose-400', height: 'h-80' },
  { id: 6, title: 'Fitness Tracking App', category: 'Mobile', color: 'from-indigo-400 to-purple-400', height: 'h-72' },
  { id: 7, title: 'Corporate Website Redesign', category: 'Web Design', color: 'from-teal-400 to-green-400', height: 'h-64' },
  { id: 8, title: 'Music Streaming Interface', category: 'UI/UX', color: 'from-violet-400 to-purple-400', height: 'h-80' },
  { id: 9, title: 'Real Estate Platform', category: 'Web Design', color: 'from-amber-400 to-orange-400', height: 'h-72' },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
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
            Featured Work
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 text-center px-2"
          >
            A curated selection of my design projects
          </motion.p>
          
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="break-inside-avoid"
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                  <div className={`bg-gradient-to-br ${item.color} ${item.height} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4 sm:p-6">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 px-2">
                          {item.title}
                        </h3>
                        <span className="inline-block px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-12 sm:mt-16 text-center"
          >
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
              View All Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
