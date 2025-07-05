'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { FloatingShapes } from '@/components/ui/floating-shapes';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="gradient-text">Gaurav</span>
            <br />
            <span className="text-white">Shokhanda</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 h-8"
          >
            <TypewriterText
              text="Full Stack & Mobile App Developer"
              delay={1000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Bijnor, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>gauravshokanda2@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91 70176 84236</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a
              href="https://linkedin.com/in/gaurav-shokhanda"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-3 rounded-full text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/gauravshokanda"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-3 rounded-full text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}