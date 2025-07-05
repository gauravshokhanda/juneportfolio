'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-20 glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Gaurav Shokhanda</h3>
            <p className="text-gray-400">
              Full Stack & Mobile App Developer passionate about creating innovative solutions
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gauravshokanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/gaurav-shokhanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gauravshokanda2@gmail.com"
                className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>gauravshokanda2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+91 70176 84236</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Bijnor, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>&copy; 2024 Gaurav Shokhanda. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}