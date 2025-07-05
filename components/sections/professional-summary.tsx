'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ProfessionalSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-12"
        >
          Professional Summary
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Full Stack & Mobile App Developer with{' '}
            <span className="text-purple-400 font-semibold">nearly 4 years of experience</span>{' '}
            developing production-grade applications using{' '}
            <span className="text-blue-400 font-semibold">React.js, React Native, Node.js, and Next.js</span>.
            Skilled in architecting real-time features with{' '}
            <span className="text-green-400 font-semibold">Socket.IO and WebSockets</span>{' '}
            while following industry-standard best practices. Proven ability to deliver{' '}
            <span className="text-pink-400 font-semibold">cross-platform apps</span>{' '}
            with measurable improvements in performance, efficiency, and user engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}