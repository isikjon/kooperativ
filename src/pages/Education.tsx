import React from 'react';
import { motion } from 'motion/react';
import { COURSES } from '../data';
import { GraduationCap, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Education = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Образовательная платформа</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите востребованную профессию и навыки для работы в сфере недвижимости, строительства и других востребованных профессиях.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {COURSES.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 blur-[2px] grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-green/60 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                    <Lock className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-green mb-3">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                <Link 
                  to="/dashboard"
                  className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-white transition-all"
                >
                  Доступно в кабинете
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-green rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-12 transform translate-x-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Как получить доступ к обучению?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Все курсы становятся активными автоматически после внесения первого паевого взноса в любую из программ кооператива.
            </p>
            <Link 
              to="/dashboard" 
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all inline-flex items-center gap-2"
            >
              Перейти к регистрации
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
