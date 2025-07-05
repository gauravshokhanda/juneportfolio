'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Eye, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// This would typically come from a database or CMS
const blogPost = {
  id: 1,
  title: 'Building Scalable React Applications: Best Practices and Patterns',
  excerpt: 'Explore the essential patterns and best practices for building maintainable and scalable React applications that can grow with your team.',
  content: `
    <p>In this comprehensive guide, we'll dive deep into the world of React architecture and explore the essential patterns and best practices for building maintainable and scalable React applications that can grow with your team.</p>
    
    <h2>Introduction</h2>
    <p>React has revolutionized the way we build user interfaces, but as applications grow in complexity, maintaining clean and scalable code becomes increasingly challenging. This article will provide you with proven strategies and patterns that will help you build React applications that stand the test of time.</p>
    
    <h2>1. Component Architecture</h2>
    <p>The foundation of any scalable React application lies in its component architecture. Here are the key principles to follow:</p>
    
    <h3>Single Responsibility Principle</h3>
    <p>Each component should have a single, well-defined responsibility. This makes components easier to test, maintain, and reuse across your application.</p>
    
    <h3>Composition over Inheritance</h3>
    <p>React favors composition over inheritance. Instead of creating complex inheritance hierarchies, compose smaller components to build more complex ones.</p>
    
    <h2>2. State Management</h2>
    <p>Effective state management is crucial for scalable React applications. Consider these approaches:</p>
    
    <h3>Local State vs Global State</h3>
    <p>Not all state needs to be global. Keep state as local as possible and only lift it up when necessary.</p>
    
    <h3>Context API and Reducers</h3>
    <p>For complex state logic, combine the Context API with useReducer for a lightweight state management solution.</p>
    
    <h2>3. Code Organization</h2>
    <p>A well-organized codebase is essential for maintainability:</p>
    
    <ul>
      <li>Group related components together</li>
      <li>Use index files for cleaner imports</li>
      <li>Separate concerns (components, hooks, utilities)</li>
      <li>Implement consistent naming conventions</li>
    </ul>
    
    <h2>4. Performance Optimization</h2>
    <p>As your application grows, performance becomes increasingly important:</p>
    
    <h3>Memoization</h3>
    <p>Use React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders.</p>
    
    <h3>Code Splitting</h3>
    <p>Implement code splitting using React.lazy and Suspense to reduce initial bundle size.</p>
    
    <h2>5. Testing Strategy</h2>
    <p>A comprehensive testing strategy is essential for scalable applications:</p>
    
    <ul>
      <li>Unit tests for individual components</li>
      <li>Integration tests for component interactions</li>
      <li>End-to-end tests for critical user flows</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Building scalable React applications requires careful planning and adherence to best practices. By following the patterns and strategies outlined in this article, you'll be well-equipped to build applications that can grow with your team and requirements.</p>
    
    <p>Remember, scalability is not just about handling more users or data—it's about creating a codebase that can evolve and adapt over time. Start with these fundamentals, and you'll be on your way to building truly scalable React applications.</p>
  `,
  author: 'Gaurav Shokhanda',
  date: '2024-01-15',
  readTime: '8 min read',
  views: 1234,
  category: 'React',
  image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tags: ['React', 'JavaScript', 'Frontend', 'Architecture', 'Best Practices'],
};

export default function BlogPostPage() {
  const params = useParams();
  
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <div className="relative">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4 inline-block">
                {blogPost.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={16} />
                    <span>{blogPost.views}</span>
                  </div>
                </div>
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Share2 size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">About the Author</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">GS</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Gaurav Shokhanda</h4>
              <p className="text-gray-400">
                Full Stack & Mobile App Developer with 4+ years of experience in building scalable applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}