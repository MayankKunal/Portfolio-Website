'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: 'https://github.com/MayankKunal', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mayankkumar4647', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mayankkumar4647@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <motion.footer
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} Mayank Kumar. All rights reserved.
          </motion.div>
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 360, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                <social.icon className="w-5 h-5 relative z-10" />
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Built with{' '}
            
              ❤️
          {' '}
            &{' '}
            <motion.span
              className="text-gradient inline-block"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              by Mayank
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

