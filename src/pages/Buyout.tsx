import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Car, Shield, Clock, CheckCircle2, Send, ArrowRight, Phone, Upload, FileText, Plus, X } from 'lucide-react';

export const Buyout = () => {
  const [activeTab, setActiveTab] = useState<'realestate' | 'car'>('realestate');
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* ... header ... */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Срочный выкуп</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите деньги за вашу недвижимость или автомобиль в течение 24 часов.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-8">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex gap-4 mb-10">
                <button 
                  onClick={() => setActiveTab('realestate')}
                  className={`flex-grow flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all border-2 ${
                    activeTab === 'realestate' 
                      ? 'bg-brand-green border-brand-green text-white shadow-lg' 
                      : 'bg-white border-gray-100 text-gray-500 hover:border-brand-gold/30'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  Недвижимость
                </button>
                <button 
                  onClick={() => setActiveTab('car')}
                  className={`flex-grow flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all border-2 ${
                    activeTab === 'car' 
                      ? 'bg-brand-green border-brand-green text-white shadow-lg' 
                      : 'bg-white border-gray-100 text-gray-500 hover:border-brand-gold/30'
                  }`}
                >
                  <Car className="w-5 h-5" />
                  Автомобиль
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Ваше имя</label>
                        <input required type="text" placeholder="Иван Иванов" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Телефон</label>
                        <input required type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                      </div>
                    </div>

                    {activeTab === 'realestate' ? (
                      <>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Тип объекта</label>
                          <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all">
                            <option>Квартира</option>
                            <option>Дом / Коттедж</option>
                            <option>Земельный участок</option>
                            <option>Коммерческая недвижимость</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Адрес объекта</label>
                          <input required type="text" placeholder="Город, улица, дом" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700">Марка и модель</label>
                          <input required type="text" placeholder="Например: Toyota Camry" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Год выпуска</label>
                            <input required type="number" placeholder="2020" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Пробег (км)</label>
                            <input required type="number" placeholder="50000" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Желаемая сумма (₽)</label>
                      <input required type="text" placeholder="Например: 5 000 000" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700 block">Фото и документы (ПТС, СТС, Выписки)</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {files.map((file, i) => (
                          <div key={i} className="relative aspect-square bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center p-4 text-center group">
                            <FileText className="w-8 h-8 text-brand-gold mb-2" />
                            <span className="text-[10px] text-gray-500 line-clamp-1">{file.name}</span>
                            <button 
                              type="button"
                              onClick={() => removeFile(i)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        <label className="aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-brand-gold hover:bg-brand-gold/5 transition-all group">
                          <Plus className="w-8 h-8 text-gray-300 group-hover:text-brand-gold transition-colors" />
                          <span className="text-[10px] text-gray-400 font-bold uppercase mt-2">Добавить</span>
                          <input type="file" multiple className="hidden" onChange={handleFileChange} />
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                      Отправить заявку
                      <Send className="w-6 h-6" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-green mb-4">Заявка отправлена!</h3>
                    <p className="text-gray-600 mb-8">Спасибо за ваше доверие. Мы свяжемся с вами в ближайшее время для уточнения деталей.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-gold font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all"
                    >
                      Отправить еще одну заявку <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* ... benefits ... */}
          <div className="space-y-8">
            <div className="bg-brand-green p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-3xl font-bold mb-8 relative z-10">Преимущества срочного выкупа</h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Скорость</h4>
                    <p className="text-white/70">Выход на сделку и получение денег в день обращения.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Shield className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Безопасность</h4>
                    <p className="text-white/70">Юридическая чистота сделки, оформление через нотариуса или ГИБДД.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Building2 className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Любое состояние</h4>
                    <p className="text-white/70">Выкупаем объекты с обременениями, долгами или требующие ремонта.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-brand-green mb-4">Нужна консультация?</h3>
              <p className="text-gray-500 mb-6">Позвоните нам прямо сейчас и получите бесплатную оценку по телефону.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Горячая линия</div>
                  <div className="text-xl font-bold text-brand-green">+7 (861) 200-00-00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
