import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryCategory } from '../types';
import { Play, Maximize2, X } from 'lucide-react';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Все');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories: GalleryCategory[] = ['Все', 'Сданные объекты', 'Мероприятия', 'Вебинары', 'Пайщики'];

  const filteredItems = activeCategory === 'Все' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Галерея</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Фото и видео материалы о жизни и деятельности нашего кооператива.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                activeCategory === cat 
                  ? 'bg-brand-gold border-brand-gold text-white shadow-lg' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-brand-gold/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.category} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Play className="text-white w-8 h-8 ml-1" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Maximize2 className="text-white w-8 h-8" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">{item.category}</span>
                  <span className="text-xs text-gray-400">{item.type === 'video' ? 'Видео' : 'Фото'}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-brand-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {selectedItem.type === 'video' ? (
                <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <iframe 
                    src={selectedItem.url.replace('watch?v=', 'embed/')} 
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.category} 
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
