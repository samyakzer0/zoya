// component.tsx
import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCard {
  title: string;
  category: string;
  image: string;
  color: string;
}

const projects: ProjectCard[] = [
  // Branding projects (index 0-1)
  {
    title: "Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    color: "bg-misty-rose"
  },
  {
    title: "Logo Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
    color: "bg-misty-rose"
  },
  // Digital projects (index 2-3)
  {
    title: "UI Design",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop",
    color: "bg-periwinkle"
  },
  {
    title: "Web Design",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop",
    color: "bg-periwinkle"
  },
  // Print projects (index 4-5)
  {
    title: "Poster Art",
    category: "Print",
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop",
    color: "bg-mindaro"
  },
  {
    title: "Packaging",
    category: "Print",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    color: "bg-mindaro"
  }
];

const animationStates = [
  {
    bgColor: "#ababe3ff", // periwinkle
    indicatorColor: "#4b3621ff", // caf-noir
    pathColor: "#ababe3ff",
    smileColor: "#4b3621ff",
    titleColor: "#4b3621ff",
    trackColor: "#d4fa82ff", // mindaro
    eyeWidth: 56,
    eyeHeight: 56,
    eyeBorderRadius: "100%",
    eyeBg: "#4b3621ff",
    smileRotate: 180,
    indicatorRotate: 180,
    noteText: "BRANDING",
    noteColor: "#4b3621ff",
    noteX: "0%",
    indicatorLeft: "0%",
  },
  {
    bgColor: "#d4fa82ff", // mindaro
    indicatorColor: "#4b3621ff", // caf-noir
    pathColor: "#d4fa82ff",
    smileColor: "#4b3621ff",
    titleColor: "#4b3621ff",
    trackColor: "#ababe3ff", // periwinkle
    eyeWidth: 100,
    eyeHeight: 20,
    eyeBorderRadius: "36px",
    eyeBg: "#4b3621ff",
    smileRotate: 180,
    indicatorRotate: 180,
    noteText: "DIGITAL",
    noteColor: "#4b3621ff",
    noteX: "-100%",
    indicatorLeft: "50%",
  },
  {
    bgColor: "#4b3621ff", // caf-noir
    indicatorColor: "#d4fa82ff", // mindaro
    pathColor: "#4b3621ff",
    smileColor: "#d4fa82ff",
    titleColor: "#d4fa82ff",
    trackColor: "#ababe3ff", // periwinkle
    eyeWidth: 120,
    eyeHeight: 120,
    eyeBorderRadius: "100%",
    eyeBg: "#d4fa82ff",
    smileRotate: 0,
    indicatorRotate: 0,
    noteText: "PRINT",
    noteColor: "#d4fa82ff",
    noteX: "-200%",
    indicatorLeft: "100%",
  },
];

const HandDrawnSmileIcon = (props: any) => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M10 30 Q50 70 90 30"
      strokeWidth="12"
      strokeLinecap="round"
      animate={props.animate}
      transition={props.transition}
    />
  </motion.svg>
);

export interface FeedbackSliderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const FeedbackSlider = React.forwardRef<HTMLDivElement, FeedbackSliderProps>(
  ({ className, ...props }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const currentAnim = animationStates[selectedIndex];
    const transition: any = { type: "spring", stiffness: 300, damping: 30 };

    const goToNext = () => {
      setSelectedIndex((prev) => (prev + 1) % animationStates.length);
    };

    const goToPrevious = () => {
      setSelectedIndex((prev) => (prev - 1 + animationStates.length) % animationStates.length);
    };

    // Keyboard navigation
    React.useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
      <div
        ref={ref}
        className={`relative flex w-full items-center justify-center overflow-hidden ${className}`}
        style={{ backgroundColor: currentAnim.bgColor, height: '100%' }}
        {...props}
      >
        <div className="flex w-full max-w-[400px] flex-col items-center justify-center p-4" style={{ height: '100%' }}>
          
          <div className="flex h-[300px] flex-col items-center justify-center">
            <div className="flex items-center gap-6">
              {/* Previous Button */}
              <motion.button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center font-black text-2xl"
                style={{
                  boxShadow: "4px 4px 0px #000",
                  backgroundColor: currentAnim.trackColor,
                  color: currentAnim.titleColor
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "6px 6px 0px #000"
                }}
                whileTap={{ scale: 0.95 }}
              >
                ‹
              </motion.button>

              <motion.div
                className="relative overflow-hidden rounded-2xl w-80 h-48 cursor-pointer"
                style={{
                  boxShadow: "8px 8px 0px #000",
                  border: "4px solid #000"
                }}
                animate={{
                  backgroundColor: currentAnim.bgColor,
                  scale: selectedIndex === 1 ? 1.05 : 1,
                  y: selectedIndex === 1 ? -10 : 0
                }}
                transition={transition}
                whileHover={{
                  scale: 1.1,
                  y: -15,
                  boxShadow: "12px 12px 0px #000",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.img
                  src={projects.filter(project => {
                    if (selectedIndex === 0) return project.category === 'Branding';
                    if (selectedIndex === 1) return project.category === 'Digital';
                    if (selectedIndex === 2) return project.category === 'Print';
                    return false;
                  })[0]?.image || projects[0].image}
                  alt={projects.filter(project => {
                    if (selectedIndex === 0) return project.category === 'Branding';
                    if (selectedIndex === 1) return project.category === 'Digital';
                    if (selectedIndex === 2) return project.category === 'Print';
                    return false;
                  })[0]?.title || projects[0].title}
                  className="w-full h-full object-cover rounded-2xl"
                  animate={{ scale: selectedIndex === 2 ? 1.1 : 1 }}
                  transition={transition}
                />
              </motion.div>

              {/* Next Button */}
              <motion.button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center font-black text-2xl"
                style={{
                  boxShadow: "4px 4px 0px #000",
                  backgroundColor: currentAnim.trackColor,
                  color: currentAnim.titleColor
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "6px 6px 0px #000"
                }}
                whileTap={{ scale: 0.95 }}
              >
                ›
              </motion.button>
            </div>
          </div>
          <div className="flex w-full items-center justify-start overflow-hidden pb-14 pt-7">
            <motion.div
              className="flex w-full shrink-0"
              animate={{ x: currentAnim.noteX }}
              transition={transition}
            >
              {animationStates.map((state, i) => (
                <div
                  key={i}
                  className="flex w-full shrink-0 items-center justify-center"
                >
                  <h1
                    className="text-5xl font-black"
                    style={{ color: state.noteColor }}
                  >
                    {state.noteText}
                  </h1>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="w-full">
            <div className="relative flex w-full items-center justify-between">
              {animationStates.map((_, i) => (
                <button
                  key={i}
                  className="z-[2] h-6 w-6 rounded-full"
                  onClick={() => setSelectedIndex(i)}
                  style={{ backgroundColor: currentAnim.trackColor }}
                />
              ))}
              <motion.div
                className="absolute top-1/2 h-1 w-full -translate-y-1/2"
                animate={{ backgroundColor: currentAnim.trackColor }}
                transition={transition}
              />
              <motion.div
                className="absolute z-[3] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full p-2"
                animate={{
                  left: currentAnim.indicatorLeft,
                  rotate: currentAnim.indicatorRotate,
                  backgroundColor: currentAnim.indicatorColor,
                }}
                transition={transition}
              >
                <HandDrawnSmileIcon
                  style={{ stroke: currentAnim.pathColor }}
                />
              </motion.div>
            </div>
            <div className="flex w-full items-center justify-between pt-6">
              {["Branding", "Digital", "Print"].map((text, i) => (
                <motion.span
                  key={text}
                  className="w-full text-center font-medium"
                  animate={{
                    color: currentAnim.titleColor,
                    opacity: selectedIndex === i ? 1 : 0.6,
                  }}
                  transition={transition}
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

FeedbackSlider.displayName = "FeedbackSlider";

export default FeedbackSlider;