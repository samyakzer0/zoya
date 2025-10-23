import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Vibrant Mobile App",
    client: "TechStart Inc",
    year: "2024",
    description: "Complete rebrand and mobile app design for a growing tech startup",
    color: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
  },
  {
    title: "Bold E-commerce",
    client: "Fashion Forward",
    year: "2024",
    description: "Modern e-commerce platform with unique shopping experience",
    color: "bg-cyan-400",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop"
  },
  {
    title: "Creative Agency Site",
    client: "Studio X",
    year: "2023",
    description: "Award-winning portfolio website with interactive animations",
    color: "bg-yellow-400",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop"
  }
];

export default function DesignCaseStudies() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block px-8 py-4 bg-purple-500 text-white border-4 border-black transform rotate-1"
            style={{ boxShadow: "8px 8px 0px #000" }}>
            CASE STUDIES
          </h2>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 p-8 rounded-3xl border-4 border-black ${
                index % 2 === 0 ? 'bg-[#FAFAF9]' : 'bg-white'
              }`} style={{ boxShadow: "12px 12px 0px #000" }}>
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="relative overflow-hidden rounded-2xl border-4 border-black"
                    style={{ boxShadow: "6px 6px 0px #000" }}>
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className={`inline-block w-fit px-6 py-2 ${study.color} rounded-xl border-4 border-black mb-4`}
                    style={{ boxShadow: "4px 4px 0px #000" }}>
                    <span className="font-black">{study.year}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-4">{study.title}</h3>
                  <p className="text-lg font-bold text-gray-700 mb-4">{study.client}</p>
                  <p className="text-lg mb-6">{study.description}</p>
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white font-black rounded-xl border-4 border-black w-fit"
                    style={{ boxShadow: "4px 4px 0px #000" }}
                    whileHover={{ boxShadow: "6px 6px 0px #000", y: -2 }}
                    whileTap={{ boxShadow: "2px 2px 0px #000", y: 0 }}
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}