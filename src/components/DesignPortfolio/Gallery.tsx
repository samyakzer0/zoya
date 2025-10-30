import { motion } from "framer-motion";
import FeedbackSlider from "../ui/feedback-slider";

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


        {/* Feedback Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl border-4 border-black"
            style={{ boxShadow: "8px 8px 0px #000", height: "600px" }}>
            <FeedbackSlider className="h-full w-full rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}