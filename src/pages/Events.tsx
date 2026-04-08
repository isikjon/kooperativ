import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../data';
import { EventCategory } from '../types';

export const Events = () => {
  const [eventCategory, setEventCategory] = useState<EventCategory>('Все');

  const filteredEvents = useMemo(() => 
    eventCategory === 'Все' ? EVENTS : EVENTS.filter(item => item.category === eventCategory),
    [eventCategory]
  );

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-brand-green mb-4">Мероприятия</h2>
            <p className="text-gray-600">Будьте в центре событий кооператива</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Все', 'События', 'Презентация', 'Обучение', 'Собрание'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setEventCategory(cat as EventCategory)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${eventCategory === cat ? 'bg-brand-gold text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={event.id}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-gold hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {event.category}
                  </span>
                  <div className="text-right">
                    <div className="text-sm font-bold text-brand-gold">{event.date}</div>
                    <div className="text-xs text-gray-400">{event.time}</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-brand-green mb-6 group-hover:text-brand-gold transition-colors">{event.title}</h4>
                <button className="w-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white py-3 rounded-xl font-bold transition-all">
                  Записаться
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
