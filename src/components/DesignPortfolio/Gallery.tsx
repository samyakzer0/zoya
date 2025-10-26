import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Brand Identity",
    category: "Branding",
    color: "bg-misty-rose",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "UI Design",
    category: "Interface",
    color: "bg-periwinkle",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Packaging",
    category: "Product",
    color: "bg-mindaro",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Poster Art",
    category: "Print",
    color: "bg-periwinkle",
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Web Design",
    category: "Digital",
    color: "bg-mindaro",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Illustration",
    category: "Art",
    color: "bg-mindaro",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop",
    size: "medium"
  }
];

export default function DesignGallery() {
  return (
    <section className="py-20 px-4 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block px-8 py-4 bg-misty-rose text-white border-4 border-black transform -rotate-1"
            style={{ boxShadow: "8px 8px 0px #000" }}>
            MY WORK
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl border-4 border-black"
                style={{ boxShadow: "8px 8px 0px #000" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <div className={`inline-block px-6 py-3 ${item.color} rounded-xl border-4 border-black mb-4`}
                        style={{ boxShadow: "4px 4px 0px #000" }}>
                        <span className="font-black text-lg">{item.category}</span>
                      </div>
                      <h3 className="text-3xl font-black text-white">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}