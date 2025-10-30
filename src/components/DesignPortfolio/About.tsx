import { motion } from "framer-motion";

const skills = [
  "UI/UX Design",
  "Brand Identity",
  "Web Design",
  "Mobile App Design",
  "Animations",
  "Wireframing",
  "sketch"
 
];

// const experiences = [
//   {
//     title: "Senior Designer",
//     company: "Creative Studio X",
//     year: "2022 - Present",
//     description: "Leading design projects for top-tier clients, focusing on innovative user experiences."
//   },
//   {
//     title: "UI/UX Designer",
//     company: "TechStart Inc",
//     year: "2020 - 2022",
//     description: "Developed mobile and web interfaces that increased user engagement by 40%."
//   },
//   {
//     title: "Junior Designer",
//     company: "Fashion Forward",
//     year: "2019 - 2020",
//     description: "Collaborated on e-commerce designs and brand strategies."
//   }
// ];

export default function DesignAbout() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative bg-white" style={{ backgroundImage: "url('/grid-bg.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-mindaro text-white border-2 sm:border-4 border-black transform rotate-1 shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000]">
              ABOUT ME
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative max-w-xs sm:max-w-sm mx-auto mb-6 lg:mb-8 left-[-150px]"
              >
                <img src="/speech-bubble.png" alt="Speech Bubble" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                  <p className="text-black font-bold text-center text-xs sm:text-sm md:text-base">
                    Hi, I'm Zoya! Passionate designer creating bold, user-centered designs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xs sm:max-w-sm mx-auto mb-6 lg:mb-0"
              >
                <img src="/wink.gif" alt="Wink" className="relative w-full h-auto top-[-70px]" />
              </motion.div>

              
            </div>

            <div className="flex-1 order-2 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-periwinkle p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-black shadow-[6px_6px_0px_#000] md:shadow-[12px_12px_0px_#000]">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 text-white">Skills & Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills.map((skill) => (
                      <div key={skill} className="bg-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border-2 border-black font-bold text-sm sm:text-base shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000]">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

        
    
      
    </section>
  );
}