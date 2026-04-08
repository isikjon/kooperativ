import React from 'react';
import { motion } from 'motion/react';
import { User, Shield, Award, CheckCircle2 } from 'lucide-react';

export const Management = () => {
  const leaders = [
    { name: 'Александр Иванов', role: 'Председатель правления', image: 'https://picsum.photos/seed/leader1/400/400' },
    { name: 'Елена Петрова', role: 'Главный бухгалтер', image: 'https://picsum.photos/seed/leader2/400/400' },
    { name: 'Дмитрий Соколов', role: 'Руководитель строительного департамента', image: 'https://picsum.photos/seed/leader3/400/400' },
    { name: 'Мария Волкова', role: 'Глава юридического отдела', image: 'https://picsum.photos/seed/leader4/400/400' },
    { name: 'Сергей Морозов', role: 'Технический директор', image: 'https://picsum.photos/seed/leader5/400/400' },
    { name: 'Анна Кузнецова', role: 'Директор по развитию', image: 'https://picsum.photos/seed/leader6/400/400' },
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Руководство</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Команда профессионалов, обеспечивающая прозрачность и надежность работы кооператива.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white text-sm font-bold">Опыт работы более 15 лет в сфере недвижимости</div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-brand-green mb-2">{leader.name}</h3>
                <p className="text-brand-gold font-bold uppercase text-xs tracking-widest">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-brand-green p-12 rounded-3xl text-white">
            <Shield className="w-12 h-12 text-brand-gold mb-6" />
            <h2 className="text-3xl font-bold mb-6">Принципы управления</h2>
            <ul className="space-y-4">
              {[
                'Полная прозрачность финансовых потоков',
                'Ежеквартальная отчетность перед пайщиками',
                'Коллективное принятие стратегических решений',
                'Строгое соблюдение законодательства РФ'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl">
            <Award className="w-12 h-12 text-brand-gold mb-6" />
            <h2 className="text-3xl font-bold text-brand-green mb-6">Наши достижения</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
                <div className="text-sm text-gray-500">Счастливых семей</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">10+</div>
                <div className="text-sm text-gray-500">Лет безупречной работы</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">1.2 млрд</div>
                <div className="text-sm text-gray-500">Объем выданных паев</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
                <div className="text-sm text-gray-500">Юридическая чистота</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
