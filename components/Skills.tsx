'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML/CSS', level: 88 },
      { name: 'MATLAB', level: 75 },
      { name: 'Python', level: 50 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Node.js', level: 92 },
      { name: 'Redux', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'Git & GitHub', level: 92 },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'Strapi', level: 80 },
      { name: 'Cloud Hosting', level: 85 },
      { name: 'Data Structures', level: 92 },
      { name: 'Algorithms', level: 90 },
      { name: 'Docker', level: 80 },
    //   { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
    >
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
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            My <motion.span
              className="text-gradient inline-block"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Skills
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
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2, type: 'spring' }}
              className="glass p-6 rounded-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.h3
                className="text-2xl font-bold mb-6 text-gradient relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.4,
                    }}
                    className="relative z-10"
                  >
                    <div className="flex justify-between mb-2">
                      <motion.span
                        className="text-gray-300 font-medium"
                        whileHover={{ scale: 1.1, color: '#60a5fa' }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        className="text-gray-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

