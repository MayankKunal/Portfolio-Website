'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const education = [
  {
    degree: 'Master of Technology',
    specialization: 'Computer Science and Engineering (Software Engineering)',
    institution: 'National Institute of Technology, Rourkela',
    location: 'Rourkela, Odisha',
    period: 'August 2024 – Present',
    cgpa: '8.15',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Technology',
    specialization: 'Computer Science and Engineering',
    institution: 'University of Allahabad',
    location: 'Prayagraj, Uttar Pradesh',
    period: 'December 2020 – May 2024',
    cgpa: '8.53',
    icon: '📚',
  },
]

const achievements = [
  {
    title: 'GATE 2024 & 2023',
    description: 'Ranked in the top 2%',
    icon: '🏆',
  },
  {
    title: 'LeetCode Biweekly Contest 146',
    description: 'Global rank 2520 / 25692',
    icon: '🥇',
  },
  {
    title: 'Coding Profiles',
    description: 'Solved over 500 questions across LeetCode & GeeksForGeeks',
    icon: '💻',
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
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
            Education & <motion.span
              className="text-gradient inline-block"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Achievements
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
            Academic journey and notable accomplishments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-6 rounded-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="text-4xl"
                    animate={inView ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      duration: 0.6,
                    }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-gradient mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <p className="text-gray-300 text-sm mb-2">{edu.specialization}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 font-semibold">CGPA: </span>
                    <span className="text-gradient font-bold text-lg">{edu.cgpa}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass p-6 rounded-xl text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                className="text-4xl mb-3 relative z-10"
                animate={inView ? {
                  rotate: [0, 10, -10, 0],
                } : {}}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ rotate: 360, scale: 1.2 }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-gradient relative z-10">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm relative z-10">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

