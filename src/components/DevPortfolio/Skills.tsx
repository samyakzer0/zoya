import { motion } from "framer-motion";
import { Terminal, TypingAnimation, AnimatedSpan } from "../ui/terminal";

const skills = [
  "✔ Frontend Development: React, Vue.js, Angular, and modern JavaScript frameworks",
  "✔ UI/UX Design: Figma, Adobe XD, Sketch, and user-centered design principles",
  "✔ Responsive Design: Mobile-first approach with CSS Grid and Flexbox",
  "✔ Performance Optimization: Code splitting, lazy loading, and bundle analysis",
  "✔ Accessibility: WCAG compliance and inclusive design practices",
  "✔ State Management: Redux, Zustand, and Context API for scalable apps"
];

export default function DevSkills() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 pixel-font royal-blue">
            TECH STACK EXPERTISE
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Showcasing our core competencies in a dynamic terminal interface
          </p>
        </motion.div>

        <div className="flex justify-center">
          <Terminal className="max-w-2xl" startOnView={true}>
            <TypingAnimation startOnView={true} delay={500} duration={100}>Initializing tech stack expertise...</TypingAnimation>
            {skills.map((skill, index) => (
              <AnimatedSpan key={index} delay={2000 + index * 2000}>{skill}</AnimatedSpan>
            ))}
          </Terminal>
        </div>

        
    
      </div>
    </section>
  );
}