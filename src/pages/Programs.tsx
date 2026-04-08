import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS } from '../data';
import * as Icons from 'lucide-react';
import { Program } from '../types';

export const Programs = () => {
  const [selectedForApply, setSelectedForApply] = useState<Program | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedForApply(null);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* ... existing header ... */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-6">Наши программы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подробные условия участия в кооперативных программах «Евразия».
          </p>
        </div>

        <div className="space-y-24">
          {PROGRAMS.map((program, idx) => {
            const Icon = (Icons as any)[program.icon] || Icons.HelpCircle;
            return (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* ... existing content ... */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-brand-gold/10 rounded-3xl blur-2xl group-hover:bg-brand-gold/20 transition-all"></div>
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-green">{program.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {program.fullDesc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-2">Условия участия</h4>
                      <ul className="space-y-2">
                        {program.conditions.map((c, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <Icons.CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-2">Финансы и сроки</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-gray-400 block">Сумма участия</span>
                          <span className="font-bold text-brand-green">от {program.minAmount}</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 block">Сроки возврата пая</span>
                          <span className="font-bold text-brand-green">{program.returnTerms}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedForApply(program)}
                    className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all"
                  >
                    Подать заявку на участие
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedForApply && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[40px] p-10 max-w-2xl w-full relative shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedForApply(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-brand-gold transition-colors z-10"
              >
                <Icons.X className="w-6 h-6" />
              </button>

              {!isSubmitted ? (
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="inline-block bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Оформление участия
                    </div>
                    <h3 className="text-2xl font-bold text-brand-green leading-tight">
                      {selectedForApply.title}
                    </h3>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-sm text-gray-400 mb-1">Стоимость пая</div>
                      <div className="text-3xl font-bold text-brand-gold">от {selectedForApply.minAmount}</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Icons.ShieldCheck className="w-4 h-4 text-brand-green" />
                        Безопасная оплата через банк
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Icons.FileText className="w-4 h-4 text-brand-green" />
                        Договор паевого участия
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Ваше имя</label>
                      <input required type="text" placeholder="Иван Иванов" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Телефон</label>
                      <input required type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-gold outline-none transition-all" />
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        Оплатить и вступить
                        <Icons.CreditCard className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-400 text-center">
                      Нажимая кнопку, вы соглашаетесь с условиями оферты и политикой конфиденциальности.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icons.CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-green mb-4">Заявка отправлена!</h3>
                  <p className="text-gray-600">Мы свяжемся с вами в ближайшее время для подтверждения платежа.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
