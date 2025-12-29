'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [

    {
        title: 'JKIAPTHUB',
        description:
          'A distance learning platform facilitating remote education with diverse courses, assessment modules, and OTP verification. Features video/image storage via Cloudinary and MongoDB database management.',
        tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Cloudinary'],
        image: '📚',
        github: 'https://github.com/MayankKunal/JkiapthubFrontend',
        live: 'https://jkiapthub-frontend.vercel.app/',
      },
  {
    title: 'BlogSpace',
    description:
      'A modern blog application that enables users to discover amazing stories, insights, and ideas from a community of writers. Built with Next.js and MongoDB, featuring a clean interface for reading and sharing blog posts.',
    tech: ['Next.js', 'MongoDB', 'React', 'JavaScript'],
    image: '✍️',
    github: 'https://github.com/MayankKunal',
    live: 'https://blog-application-veq2.vercel.app/',
  },
  {
    title: 'Veda: An AI Assistance',
    description:
      'Developed an AI assistance using ReactJS and Gemini API for advanced language processing and AI capabilities. Integrated Gemini API into ReactJS projects, leveraging its powerful language model for natural language understanding, text generation, and other AI tasks, delivering innovative and engaging user experiences.',
    tech: ['React', 'Gemini API', 'JavaScript', 'AI/ML'],
    image: '🤖',
    github: 'https://github.com/MayankKunal',
    live: '#',
  },
  {
    title: 'My College Website',
    description:
      'Collaborated with a team of 6 members to design, develop, and deploy a fully functional college website. Implemented responsive design techniques ensuring mobile-friendly accessibility across devices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '🏫',
    github: 'https://github.com/MayankKunal',
    live: 'https://www.jkinstitute.ac.in/',
  },
  {
    title: 'SYMBION',
    description:
      'A web application fostering a symbiotic environment where job seekers can apply directly from company career pages. Features Google authentication via NextAuth and seamless job posting capabilities.',
    tech: ['Next.js', 'MongoDB', 'Tailwind', 'NextAuth'],
    image: '💼',
    github: 'https://github.com/MayankKunal',
    live: '#',
  },
  {
    title: 'Weather App',
    description:
      'A beautiful and responsive weather application that provides real-time weather information for any location. Features location-based forecasts, interactive UI, and seamless user experience with accurate weather data.',
    tech: ['React', 'Weather API', 'JavaScript', 'CSS'],
    image: '🌤️',
    github: 'https://github.com/MayankKunal',
    live: 'https://weatherapp4647.netlify.app/',
  },
  
  
  
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            Featured <motion.span
              className="text-gradient inline-block"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'center' }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="glass rounded-xl overflow-hidden group relative"
              whileHover={{ scale: 1.05, y: -10, rotateY: 5, zIndex: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 relative z-10">
                <motion.div
                  className="text-5xl mb-4"
                  animate={inView ? {
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.6,
                  }}
                  whileHover={{ rotate: 360, scale: 1.3 }}
                >
                  {project.image}
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-3 text-gradient"
                  whileHover={{ scale: 1.1 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: index * 0.1 + techIndex * 0.05 + 0.4,
                        type: 'spring',
                      }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.div>
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

