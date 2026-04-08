import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../data';

export const Footer = () => {
  return (
    <footer className="bg-brand-green text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Globe className="text-brand-gold w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter">ЕВРАЗИЯ</span>
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Краснодар</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Жильё, доступное каждому. Ваш надежный партнер в мире недвижимости Краснодарского края.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Навигация</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 text-white/70">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Контакты</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-gold" /> +7 (861) 200-00-00</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand-gold" /> krasnodar@eurasia-coop.ru</li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-brand-gold" /> г. Краснодар, ул. Красная, 1</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Документы</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Устав кооператива</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Положение о паях</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Жилищный кооператив "Евразия". Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">VK</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
