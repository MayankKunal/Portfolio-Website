'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'TMRW (Aditya Birla Group Venture)',
    role: 'Software Development Engineer Intern',
    location: 'Bengaluru, India',
    period: 'August 2025',
    achievements: [
      'Collaborated with teams at Bewakoof to deliver production-ready, scalable solutions, ensuring zero downtime during system migration',
      'Developed and deployed a cron job that synced over 1M+ user wallet records from legacy Ruby on Rails system to Nest.js microservices, achieving 99.9% data accuracy',
      'Resolved critical bugs in user address creation flow within Ruby stack, reducing data sync failures by over 85%',
    ],
    tech: ['Nest.js', 'Ruby on Rails', 'RESTful APIs', 'Microservices'],
  },
  {
    company: 'Techavtar (Startup)',
    role: 'Software Development Engineer Intern',
    location: 'Bengaluru, India',
    period: 'July 2023 – November 2023',
    achievements: [
      'Built and deployed over 50 high-impact APIs using Node.js, designed for optimal efficiency and user-friendliness',
      'Revamped backend infrastructure of a prominent Bengaluru-based Taxi Service Towner using Node.js and MongoDB, improving system performance',
      'Developed an Admin Dashboard for proper monitoring and management, seamlessly integrating APIs into the platform',
    ],
    tech: ['Node.js', 'MongoDB', 'REST APIs', 'Admin Dashboard'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Work <motion.span
              className="text-gradient inline-block"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Experience
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
            Professional journey and impactful contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-6 md:p-8 rounded-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-gradient mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.3 }}
                    >
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: index * 0.2 + techIndex * 0.05 + 0.5,
                        type: 'spring',
                      }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

