import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Блог кооператива</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полезные статьи, кейсы и новости из мира кооперации и недвижимости.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
              </Link>
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>03.04.2026</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-2xl font-bold text-brand-green mb-4 group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-brand-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Читать полностью <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
