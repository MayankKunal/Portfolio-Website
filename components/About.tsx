'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Code, Lightbulb, Rocket } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code that stands the test of time.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Bringing creative solutions to complex problems with cutting-edge technology.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast, efficient applications that provide exceptional user experiences.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            About <motion.span
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="glass p-8 rounded-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, rotateY: -15 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.h3
                className="text-2xl font-bold mb-4 text-gradient relative z-10"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                About Me
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-4 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
             >
                I'm a Software Development Engineer currently pursuing M.Tech in 
                Computer Science and Engineering with specialization in Software Engineering 
                at National Institute of Technology, Rourkela. With a strong foundation from 
                my B.Tech at University of Allahabad (CGPA: 8.53), I've worked on production-ready 
                solutions at TMRW (Aditya Birla Group) and Techavtar.
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                My expertise lies in building scalable backend systems, developing RESTful APIs, 
                and creating seamless user experiences. I've successfully migrated 1M+ user records 
                with 99.9% accuracy and built over 50 high-impact APIs. I'm passionate about solving 
                complex problems and delivering efficient, maintainable code.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                className="glass p-6 rounded-xl text-center relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, rotate: 5, zIndex: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="text-3xl font-bold text-gradient mb-2 relative z-10"
                  animate={inView ? {
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.5,
                  }}
                >
                  {item === 1 ? '500+' : item === 2 ? '1M+' : item === 3 ? '2%' : '50+'}
                </motion.div>
                <div className="text-sm text-gray-400 relative z-10">
                  {item === 1
                    ? 'DSA Problems'
                    : item === 2
                    ? 'Records Migrated'
                    : item === 3
                    ? 'GATE Rank'
                    : 'APIs Built'}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass p-6 rounded-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

