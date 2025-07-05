'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Server, Database, Cloud, Zap, Award, Users, Coffee, Heart, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const expertise = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks like React.js, Next.js, and React Native.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building scalable server-side applications with Node.js, Express.js, and implementing RESTful APIs.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with React Native and native iOS/Android development.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient database schemas and implementing solutions with MongoDB, PostgreSQL, and MySQL.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS, implementing CI/CD pipelines.',
    },
    {
      icon: Zap,
      title: 'Real-time Features',
      description: 'Implementing real-time functionality using Socket.IO, WebSockets, and other modern technologies.',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: '4+ Years Experience',
      description: 'Professional development experience across multiple technologies and industries.',
    },
    {
      icon: Users,
      title: '50+ Projects Delivered',
      description: 'Successfully completed projects ranging from small applications to enterprise solutions.',
    },
    {
      icon: Coffee,
      title: '1000+ Hours Coding',
      description: 'Dedicated countless hours to perfecting craft and staying updated with latest technologies.',
    },
    {
      icon: Heart,
      title: 'Open Source Contributor',
      description: 'Active contributor to open source projects and community-driven development.',
    },
  ];

  const personalValues = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'I believe in writing clean, maintainable code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I stay ahead by constantly learning new skills.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Great software is built by great teams working together towards common goals.',
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every line of code I write is focused on creating better user experiences.',
    },
  ];

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
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between technology and user experience.
          </p>
        </motion.div>

        {/* Developer Image and Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-white mb-6">Hello, I'm Gaurav!</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to my digital space! I'm a passionate Full Stack & Mobile App Developer with nearly 4 years of experience in crafting digital solutions that make a difference. Based in the beautiful city of Bijnor, India, I've been on an incredible journey of turning ideas into reality through code.
                </p>
                <p>
                  My expertise spans across the entire development spectrum - from creating stunning user interfaces with React.js and Next.js to building robust backend systems with Node.js. I have a special love for mobile development, particularly with React Native, where I enjoy bringing native-like experiences to cross-platform applications.
                </p>
                <p>
                  What drives me is the endless possibility of technology to solve real-world problems. Whether it's implementing real-time features with Socket.IO or optimizing database performance, I approach each challenge with curiosity and determination.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gaurav Shokhanda"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Code size={20} className="text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12">
            Achievements & Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                My journey in software development began during my BCA studies at SRM University, where I discovered my passion for creating digital solutions. What started as curiosity about how applications work evolved into a deep fascination with the entire development lifecycle.
              </p>
              <p>
                Over the past 4 years, I've had the privilege of working with diverse teams and technologies, from early-stage startups to established companies. Each project has taught me something new and reinforced my belief that great software is built through collaboration, continuous learning, and attention to detail.
              </p>
              <p>
                I specialize in full-stack development with a focus on modern JavaScript frameworks, but I'm always exploring new technologies and methodologies to stay at the forefront of the industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Beyond Code</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring developers. I believe in the power of community and knowledge sharing.
              </p>
              <p>
                I'm particularly interested in the intersection of AI and web development, exploring how machine learning can enhance user experiences and streamline development processes.
              </p>
              <p>
                My goal is to continue growing as a developer while building solutions that make a positive impact on users' lives. I'm always open to new opportunities and collaborations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">🎮 Gaming</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">📚 Reading</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">🎵 Music</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">✈️ Travel</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12">
            My Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <section ref={ref} className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12"
          >
            Areas of Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card p-8 rounded-xl mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Fun Facts About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">☕</div>
              <h3 className="text-lg font-semibold text-white">Coffee Enthusiast</h3>
              <p className="text-gray-400 text-sm">Average 4 cups per day</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🌙</div>
              <h3 className="text-lg font-semibold text-white">Night Owl</h3>
              <p className="text-gray-400 text-sm">Most productive after 10 PM</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎯</div>
              <h3 className="text-lg font-semibold text-white">Problem Solver</h3>
              <p className="text-gray-400 text-sm">Love debugging challenges</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center glass-card p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-gray-300 mb-6">
            I'm always excited to work on new projects and collaborate with like-minded individuals.
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