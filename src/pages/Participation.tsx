import React from 'react';
import { motion } from 'motion/react';
import { PARTICIPATION_STEPS } from '../data';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export const Participation = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Как стать участником</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простые шаги для вступления в потребительский кооператив «Евразия».
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PARTICIPATION_STEPS.map((step, idx) => {
            const Icon = (Icons as any)[step.icon] || Icons.HelpCircle;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-brand-gold/10 transition-all"></div>
                <div className="w-16 h-16 bg-brand-green text-white rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-brand-gold font-bold text-sm mb-2 uppercase tracking-widest">Шаг {step.id}</div>
                <h3 className="text-2xl font-bold text-brand-green mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-brand-green rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 skew-x-12 transform translate-x-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Заполните анкету пайщика прямо сейчас и мы свяжемся с вами в ближайшее время для завершения регистрации.
            </p>
            <Link 
              to="/questionnaire" 
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all inline-flex items-center gap-2"
            >
              Заполнить анкету
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
