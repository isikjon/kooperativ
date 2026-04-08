import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Globe, MessageCircle, Instagram, Facebook } from 'lucide-react';

export const Contacts = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда на связи и готовы ответить на любые ваши вопросы.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-green mb-8">Наши офисы</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-green mb-1">Центральный офис</div>
                    <div className="text-gray-500 text-sm">г. Краснодар, ул. Красная, 1</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-green mb-1">Горячая линия</div>
                    <div className="text-gray-500 text-sm">+7 (861) 200-00-00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-green mb-1">Электронная почта</div>
                    <div className="text-gray-500 text-sm">krasnodar@eurasia-coop.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-green mb-1">Режим работы</div>
                    <div className="text-gray-500 text-sm">Пн-Пт: 09:00 — 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-green p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-gold transition-all"><MessageCircle className="w-6 h-6" /></button>
                <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-gold transition-all"><Instagram className="w-6 h-6" /></button>
                <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-gold transition-all"><Facebook className="w-6 h-6" /></button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-green mb-8">Напишите нам</h3>
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Ваше имя</label>
                  <input type="text" placeholder="Иван Иванов" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700">Сообщение</label>
                  <textarea placeholder="Ваш вопрос..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all h-40 resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                    Отправить сообщение
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="h-[500px] bg-gray-200 rounded-[40px] overflow-hidden shadow-xl border border-gray-100 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.344485361009!2d38.9754113155416!3d45.03547007909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f7678555555%3A0x5555555555555555!2z0YPQuy4g0JrRgNCw0YHQvdCw0Y8sIDEsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1MDA2Mw!5e0!3m2!1sru!2sru!4v1648888888888!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
