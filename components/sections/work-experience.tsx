'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    company: 'Leavecode Technologies',
    position: 'Full Stack Developer',
    period: 'Sep 2022 – Present',
    location: 'Remote',
    achievements: [
      'Developed and maintained multiple full-stack applications using React.js and Node.js',
      'Implemented real-time features using Socket.IO and WebSockets',
      'Built responsive mobile applications with React Native',
      'Optimized application performance resulting in 40% faster load times',
      'Collaborated with cross-functional teams to deliver projects on schedule',
    ],
  },
  {
    company: 'Sentreo Pvt. Ltd.',
    position: 'Software Developer',
    period: 'Nov 2021 – Aug 2022',
    location: 'Gurgaon, India',
    achievements: [
      'Developed user-friendly web applications using React.js and modern JavaScript',
      'Worked on API integration and database management',
      'Participated in code reviews and maintained coding standards',
      'Contributed to the development of responsive and accessible UI components',
    ],
  },
  {
    company: 'Trident Analytical Solutions',
    position: 'Junior Developer',
    period: 'Jul 2021 – Aug 2021',
    location: 'Delhi, India',
    achievements: [
      'Assisted in the development of web applications and components',
      'Learned industry best practices and coding standards',
      'Worked with senior developers on various projects',
      'Gained experience in full-stack development lifecycle',
    ],
  },
];

export function WorkExperience() {
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
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-purple-400 mb-2">
                    <Building size={16} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}