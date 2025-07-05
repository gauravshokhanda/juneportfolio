'use client';

import { motion } from 'framer-motion';

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 60, 0],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-teal-500/20 rounded-full blur-sm"
      />
    </div>
  );
}