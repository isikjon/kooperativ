import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { SHOP_ITEMS } from '../data';
import { Category } from '../types';
import { Modal } from '../components/Modal';

export const Shop = () => {
  const [shopCategory, setShopCategory] = useState<Category>('Все');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredShop = useMemo(() => 
    shopCategory === 'Все' ? SHOP_ITEMS : SHOP_ITEMS.filter(item => item.category === shopCategory),
    [shopCategory]
  );

  return (
    <section className="py-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-brand-green mb-4">Магазин объектов</h2>
            <p className="text-gray-600">Эксклюзивные предложения для наших пайщиков</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Все', 'Квартиры', 'Дома', 'Участки', 'Спецпредложение'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setShopCategory(cat as Category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${shopCategory === cat ? 'bg-brand-green text-white' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredShop.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="bg-white rounded-[12px] overflow-hidden card-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-brand-green mb-4 line-clamp-1">{item.title}</h4>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Рыночная цена:</span>
                      <span className="text-gray-500 line-through">{item.price.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-brand-green">Для пайщиков:</span>
                      <span className="text-xl font-black text-brand-gold">{(item.price * 0.85).toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-brand-green hover:bg-brand-green/90 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Забронировать
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isBookingOpen && (
          <Modal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)}>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="text-brand-gold w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-brand-green mb-4">Бронирование объекта</h2>
              <p className="text-gray-500 mb-8">Для бронирования данного объекта вам необходимо быть действующим пайщиком кооператива.</p>
              <div className="flex flex-col gap-4">
                <button className="bg-brand-gold text-white py-4 rounded-xl font-bold text-lg" onClick={() => setIsBookingOpen(false)}>
                  Стать пайщиком
                </button>
                <button className="text-gray-400 font-bold" onClick={() => setIsBookingOpen(false)}>
                  Закрыть
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};
