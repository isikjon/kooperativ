import React from 'react';
import { motion } from 'motion/react';
import { Users, Building2, Landmark, History } from 'lucide-react';

export const Practice = () => {
  return (
    <section className="py-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-6">Мировая практика кооперации</h2>
          <p className="text-gray-600 text-lg">
            Мы не изобретаем велосипед, мы используем проверенные десятилетиями механизмы, которые успешно работают в самых развитых странах мира.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: 'Япония / Муудзин', desc: 'Беспроцентные круги взаимопомощи, основанные на доверии и коллективном капитале.', icon: <Users className="w-8 h-8" /> },
            { title: 'Канада / Хадаша', desc: 'Кооперативное жилье, составляющее значительную долю рынка недвижимости страны.', icon: <Building2 className="w-8 h-8" /> },
            { title: 'СССР / ЖСК', desc: 'Проверенная временем система жилищно-строительных кооперативов.', icon: <History className="w-8 h-8" /> },
            { title: 'Турция / Джихан', desc: 'Инновационные системы срочного выкупа и обмена недвижимости внутри сообщества.', icon: <Landmark className="w-8 h-8" /> },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[12px] card-shadow border-b-4 border-brand-gold group"
            >
              <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-green mb-4">{card.title}</h4>
              <p className="text-gray-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-brand-green hover:bg-brand-green/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all">
            Вступить в Евразию
          </button>
        </div>
      </div>
    </section>
  );
};
