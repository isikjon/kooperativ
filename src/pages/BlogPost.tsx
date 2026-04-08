import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { ArrowLeft, Calendar, Tag, Hash, UserPlus } from 'lucide-react';

export const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">Статья не найдена</h1>
        <Link to="/blog" className="text-brand-gold mt-4 inline-block">Вернуться в блог</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-gold transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Назад в блог
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-[400px] rounded-[40px] overflow-hidden mb-12 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>03.04.2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="text-xl font-medium text-brand-green mb-8">
              {post.excerpt}
            </p>
            <div className="whitespace-pre-wrap leading-relaxed">
              {post.content}
              {"\n\n"}
              Кооперация — это не просто финансовый инструмент, это сообщество единомышленников, стремящихся к общей цели. В рамках нашего кооператива «Евразия» мы внедряем лучшие мировые практики, чтобы сделать жилье и автомобили доступными для каждого жителя Краснодарского края.
              {"\n\n"}
              Наши программы разработаны с учетом потребностей разных категорий граждан: от молодых семей до опытных инвесторов. Мы обеспечиваем полную юридическую чистоту и прозрачность всех операций.
            </div>
          </div>

          {post.tags && (
            <div className="flex flex-wrap gap-3 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  <Hash className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.keywords && (
            <div className="text-sm text-gray-400 mb-12 italic">
              Ключевые слова: {post.keywords.join(', ')}
            </div>
          )}

          <div className="bg-brand-green p-10 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h2 className="text-3xl font-bold mb-2">Готовы стать частью кооператива?</h2>
              <p className="text-white/70">Присоединяйтесь к нам сегодня и начните путь к своей цели.</p>
            </div>
            <Link 
              to="/questionnaire" 
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center gap-3 whitespace-nowrap"
            >
              <UserPlus className="w-6 h-6" />
              Вступить в кооператив
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
