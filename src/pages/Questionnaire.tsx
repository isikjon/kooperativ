import React, { useState } from 'react';
import { Send, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Questionnaire = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-32 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-green mb-4">Расширенная анкета пайщика</h2>
            <p className="text-gray-500">Заполните анкету, мы свяжемся с вами в ближайшее время.</p>
          </div>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleFormSubmit}>
            {/* ... existing fields ... */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">ФИО полностью</label>
              <input type="text" placeholder="Иванов Иван Иванович" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Дата рождения</label>
              <input type="date" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Паспортные данные (серия, номер)</label>
              <input type="text" placeholder="0000 000000" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Адрес регистрации</label>
              <input type="text" placeholder="г. Краснодар, ул. Красная, д. 1, кв. 1" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Телефон</label>
              <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" placeholder="ivanov@example.com" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Выберите программу участия</label>
              <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all appearance-none">
                <option>Совместный срочный выкуп</option>
                <option>Строительство жилья</option>
                <option>Агентство недвижимости</option>
                <option>Накопительная ипотека</option>
                <option>Партнерская программа</option>
                <option>Программа "Платим за рекламу"</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Дополнительная информация / Цель вступления</label>
              <textarea placeholder="Опишите ваши цели или задайте вопрос..." className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all h-32 resize-none"></textarea>
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-brand-gold" required />
                <span className="text-sm text-gray-600">Я ознакомлен с уставом кооператива "Евразия"</span>
              </label>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                Отправить заявку
                <Send className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[40px] p-12 max-w-lg w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setIsSubmitted(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-brand-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-brand-green mb-4">Заявка отправлена!</h3>
              <p className="text-gray-600 text-lg mb-8">
                Спасибо за ваше доверие. Мы свяжемся с вами в ближайшее время для уточнения деталей.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-brand-gold text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-brand-gold-dark transition-all"
              >
                Понятно
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
