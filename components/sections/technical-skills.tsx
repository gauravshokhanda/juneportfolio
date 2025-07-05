'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Socket.IO', 'REST APIs', 'GraphQL', 'Microservices'],
    color: 'from-green-500 to-teal-500',
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'Native iOS', 'Android', 'Flutter'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Linux', 'Nginx'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Cloud & Hosting',
    skills: ['AWS', 'Vercel', 'Netlify', 'Heroku', 'DigitalOcean'],
    color: 'from-indigo-500 to-purple-500',
  },
];

export function TechnicalSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
              <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}