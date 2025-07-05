'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const projects = [
  {
    title: 'CRM System',
    description: 'A comprehensive Customer Relationship Management system built with the MERN stack. Features include real-time updates, interactive dashboards, advanced analytics, lead management, and automated workflows.',
    longDescription: 'This CRM system was designed to streamline customer interactions and boost sales productivity. It includes features like contact management, deal tracking, email integration, reporting dashboards, and real-time notifications using Socket.IO.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Chart.js', 'Express.js', 'JWT'],
    github: 'https://github.com/gauravshokanda/crm-system',
    demo: 'https://crm-demo.gauravshokanda.dev',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack',
    duration: '3 months',
    team: '4 developers',
    status: 'Completed',
  },
  {
    title: 'AC5D Property Review App',
    description: 'A React Native application for property reviews featuring real-time insights, interactive maps, floor plan uploads, and comprehensive property analytics.',
    longDescription: 'This mobile application revolutionizes property reviews by providing real-time insights, interactive maps, and comprehensive property analytics. Users can upload floor plans, view property histories, and make informed decisions.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS S3', 'Firebase'],
    github: 'https://github.com/gauravshokanda/ac5d-property-app',
    demo: 'https://ac5d-demo.gauravshokanda.dev',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    duration: '4 months',
    team: '3 developers',
    status: 'Completed',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features including real-time inventory management, payment processing, order tracking, and analytics dashboard.',
    longDescription: 'Built a scalable e-commerce platform with features like product catalog management, shopping cart, payment integration with Stripe, order management, and comprehensive admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma'],
    github: 'https://github.com/gauravshokanda/ecommerce-platform',
    demo: 'https://ecommerce-demo.gauravshokanda.dev',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack',
    duration: '5 months',
    team: '2 developers',
    status: 'In Progress',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and productivity analytics.',
    longDescription: 'Developed a comprehensive task management solution with features like project boards, team collaboration, time tracking, and productivity analytics. Built with modern technologies for optimal performance.',
    technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Redux', 'Material-UI'],
    github: 'https://github.com/gauravshokanda/task-management',
    demo: 'https://tasks-demo.gauravshokanda.dev',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack',
    duration: '2 months',
    team: 'Solo',
    status: 'Completed',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.',
    longDescription: 'Created a powerful social media management tool that allows users to manage multiple social media accounts, schedule posts, track engagement, and analyze performance metrics.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'Bootstrap', 'Social APIs'],
    github: 'https://github.com/gauravshokanda/social-dashboard',
    demo: 'https://social-demo.gauravshokanda.dev',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack',
    duration: '3 months',
    team: '3 developers',
    status: 'Completed',
  },
  {
    title: 'Weather App',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and personalized weather insights.',
    longDescription: 'Built a modern weather application with features like current weather conditions, 7-day forecasts, weather maps, and personalized weather insights based on user preferences.',
    technologies: ['React Native', 'OpenWeather API', 'AsyncStorage', 'React Navigation'],
    github: 'https://github.com/gauravshokanda/weather-app',
    demo: 'https://weather-demo.gauravshokanda.dev',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    duration: '1 month',
    team: 'Solo',
    status: 'Completed',
  },
];

export default function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <section ref={ref} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} />
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center glass-card p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h2>
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}