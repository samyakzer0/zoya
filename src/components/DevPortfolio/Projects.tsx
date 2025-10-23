import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Astrid Müller',
    category: 'Full-Stack App',
    description: 'Modern web application with React and Node.js',
    longDescription: 'A comprehensive full-stack application built with React and Node.js, featuring user authentication, real-time data processing, and scalable architecture. Designed for seamless user experience and efficient backend operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    demoUrl: 'https://example.com/astrid-muller',
    githubUrl: 'https://github.com/example/astrid-muller',
    featured: true
  },
  {
    id: '2',
    title: 'AI-Powered Web3 Suite',
    category: 'Blockchain Integration',
    description: 'Complete Web3 integration with AI capabilities',
    longDescription: 'An innovative Web3 suite that integrates AI for smart contract analysis, automated trading, and decentralized finance solutions. Built with Solidity and advanced AI models for predictive analytics.',
    technologies: ['Solidity', 'Web3', 'AI/ML', 'Ethereum', 'Python'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
    demoUrl: 'https://example.com/ai-web3-suite',
    githubUrl: 'https://github.com/example/ai-web3-suite',
    featured: true
  },
  {
    id: '3',
    title: 'Ultimate Design Partner',
    category: 'SaaS Platform',
    description: 'Comprehensive design and development platform',
    longDescription: 'A SaaS platform that combines design tools with development capabilities, offering collaborative workspaces, version control, and automated deployment. Ideal for teams looking to streamline their workflow.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    demoUrl: 'https://example.com/design-partner',
    githubUrl: 'https://github.com/example/design-partner',
    featured: false
  },
  {
    id: '4',
    title: 'Business Growth Suite',
    category: 'Enterprise Solution',
    description: 'Scalable business management platform',
    longDescription: 'An enterprise-grade platform for business management, including CRM, analytics, and automation tools. Scalable architecture ensures performance for large organizations with advanced security features.',
    technologies: ['Vue.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
    demoUrl: 'https://example.com/growth-suite',
    githubUrl: 'https://github.com/example/growth-suite',
    featured: false
  }
];

export default function DevProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Light rays effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-royal-blue/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-royal-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-light mb-8 pixel-font royal-blue"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            PROJECTS
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Solutions i've worked upon.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative z-10 select-none"
              onClick={(e) => handleProjectClick(project, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectClick(project, e);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="relative overflow-hidden border border-black hover:border-gray-700 transition-all duration-500 hover:-translate-y-1 bg-gray-900/50 backdrop-blur-sm">
                {/* Project Image Area */}
                <div className="h-48 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackDiv) {
                        fallbackDiv.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden absolute inset-0 text-gray-300 text-sm flex items-center justify-center bg-gray-900">
                    {project.title}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 text-xs font-medium text-gray-400">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-light mb-4 group-hover:royal-blue transition-all duration-300 pixel-font">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedProject(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-gray-900 border border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors text-gray-400 z-10"
                  aria-label="Close project details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Content */}
                <div className="p-12">
                  {/* Header */}
                  <div className="mb-12">
                    <div className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      {selectedProject.category}
                      {selectedProject.featured && (
                        <span className="ml-4">• FEATURED PROJECT</span>
                      )}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-light mb-6 pixel-font royal-blue">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Preview Area */}
                  <div className="mb-12 h-64 bg-gray-900 flex items-center justify-center border border-black relative overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} preview`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallbackDiv) {
                          fallbackDiv.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 text-gray-400 flex items-center justify-center">
                      Project Preview
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-6 pixel-font royal-blue">Overview</h3>
                    <p className="text-gray-300 leading-relaxed font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-6 pixel-font royal-blue">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-black text-gray-400 font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-black text-gray-300 hover:border-royal-blue hover:text-royal-blue transition-all font-light"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-black text-gray-400 hover:border-gray-600 transition-all font-light"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}