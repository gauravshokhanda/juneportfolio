'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications: Best Practices and Patterns',
    excerpt: 'Explore the essential patterns and best practices for building maintainable and scalable React applications that can grow with your team.',
    content: 'In this comprehensive guide, we\'ll dive deep into the world of React architecture...',
    author: 'Gaurav Shokhanda',
    date: '2024-01-15',
    readTime: '8 min read',
    views: 1234,
    category: 'React',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'JavaScript', 'Frontend', 'Architecture'],
  },
  {
    id: 2,
    title: 'The Future of Mobile Development: React Native vs Flutter',
    excerpt: 'A comprehensive comparison of React Native and Flutter, helping you choose the right framework for your next mobile project.',
    content: 'Mobile development has evolved significantly in recent years...',
    author: 'Gaurav Shokhanda',
    date: '2024-01-10',
    readTime: '12 min read',
    views: 856,
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Flutter', 'Mobile', 'Cross-platform'],
  },
  {
    id: 3,
    title: 'Implementing Real-time Features with Socket.IO and Node.js',
    excerpt: 'Learn how to build real-time applications using Socket.IO and Node.js, from basic setup to advanced features.',
    content: 'Real-time applications have become essential in today\'s digital landscape...',
    author: 'Gaurav Shokhanda',
    date: '2024-01-05',
    readTime: '10 min read',
    views: 674,
    category: 'Backend',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Socket.IO', 'Node.js', 'Real-time', 'WebSockets'],
  },
  {
    id: 4,
    title: 'Modern CSS Techniques: Grid, Flexbox, and Beyond',
    excerpt: 'Master modern CSS layout techniques and create responsive designs that work across all devices.',
    content: 'CSS has evolved tremendously, offering powerful layout systems...',
    author: 'Gaurav Shokhanda',
    date: '2023-12-28',
    readTime: '6 min read',
    views: 523,
    category: 'CSS',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['CSS', 'Grid', 'Flexbox', 'Responsive'],
  },
  {
    id: 5,
    title: 'Database Design Best Practices for Modern Applications',
    excerpt: 'Learn how to design efficient and scalable database schemas for modern web applications.',
    content: 'Database design is crucial for application performance and scalability...',
    author: 'Gaurav Shokhanda',
    date: '2023-12-20',
    readTime: '14 min read',
    views: 789,
    category: 'Database',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Database', 'MongoDB', 'PostgreSQL', 'Schema Design'],
  },
  {
    id: 6,
    title: 'Optimizing Web Performance: A Developer\'s Guide',
    excerpt: 'Discover essential techniques for optimizing web application performance and improving user experience.',
    content: 'Web performance optimization is crucial for user satisfaction...',
    author: 'Gaurav Shokhanda',
    date: '2023-12-15',
    readTime: '9 min read',
    views: 445,
    category: 'Performance',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Performance', 'Optimization', 'Web Development', 'Best Practices'],
  },
];

const categories = ['All', 'React', 'Mobile', 'Backend', 'CSS', 'Database', 'Performance'];

export default function BlogPage() {
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
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology, and the ever-evolving world of software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <section ref={ref} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center glass-card p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to get notified about new blog posts and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}