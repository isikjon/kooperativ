import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Zap, 
  ArrowRight, 
  Building2, 
  Handshake, 
  PiggyBank, 
  CheckCircle2, 
  X, 
  Tv, 
  Play, 
  Users, 
  Megaphone, 
  Star,
  MessageSquare,
  DollarSign
} from 'lucide-react';
import { Modal } from '../components/Modal';
import { TV_SCHEDULE, BLOG_POSTS } from '../data';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [activeTvTab, setActiveTvTab] = useState<'day' | 'week' | 'month'>('day');

  const programs = [
    {
      id: 1,
      title: 'Совместный срочный выкуп',
      icon: <Zap className="w-8 h-8" />,
      shortDesc: 'Пайщик вносит пай, который участвует в срочном выкупе объектов недвижимости (квартира, дом, участок).',
      fullDesc: 'Кооператив формирует общий пул из паевых взносов. Средства используются для срочного выкупа. Прибыль после продажи недвижимости распределяется пропорционально паям. Покупателем может быть сам пайщик со скидкой как участник кооператива.',
      btnText: 'Участвовать в выкупе'
    },
    {
      id: 2,
      title: 'Строительство жилья',
      icon: <Building2 className="w-8 h-8" />,
      shortDesc: 'Кооператив строит недвижимость за счёт пайщиков на основе собственного производства арболитных блоков.',
      fullDesc: 'Купить готовое жильё может пайщик кооператива со скидкой от 10% до 20% от рыночной стоимости. Либо недвижимость продаётся на рынке, а прибыль распределяется между пайщиками пропорционально их паям, участвующим в строительстве. Строим коттеджи, таунхаусы, фреймы.',
      btnText: 'Участвовать в строительстве'
    },
    {
      id: 3,
      title: 'Агентство недвижимости «Евразия»',
      icon: <Handshake className="w-8 h-8" />,
      shortDesc: 'Трудоустройство членов кооператива в профессии «Агент по недвижимости». Бесплатное обучение.',
      fullDesc: 'Доход: минимальная зарплата + процент от личных продаж. Дополнительно: определённый процент от всех сделок агентства распределяется между агентами-пайщиками в общем фонде «Моя Квартира». Также участвовать могут рекомендатели (те, кто находит желающих купить или продать недвижимость).',
      btnText: 'Стать агентом или рекомендателем'
    },
    {
      id: 4,
      title: 'Накопительная ипотека',
      icon: <PiggyBank className="w-8 h-8" />,
      shortDesc: 'Жильё, доступное каждому. Вклады делает пайщик или кооператив за счёт своей деятельности.',
      fullDesc: `Участвуют граждане РФ в Краснодарском крае. 
      Этап 1 – Накопление: Вклад в банке-партнёре до 1795 дней. Социальная выплата — 30% от взноса (до 3000 ₽/мес).
      Этап 2 – Приобретение: Покупка готового жилья, квартиры в строю (214-ФЗ) или строительство дома.
      Преимущества: Господдержка 30%, накопление первоначального взноса, без обязательного кредита.`,
      btnText: 'Открыть накопительный вклад'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/krasnodar/1920/1080" 
            alt="Krasnodar Panorama" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 to-brand-green/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-1 rounded-full text-sm font-bold mb-6 border border-brand-gold/30">
              Евразия (Краснодар)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Жильё, авто <span className="text-brand-gold underline decoration-brand-gold/30">доступное каждому</span>.
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Мировая практика кооперации: срочный выкуп, строительство, накопительная ипотека. Ваше жилье — наша общая цель.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#questionnaire" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center gap-2 group">
                Вступить в кооператив
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-brand-green w-8 h-8" />
              <h3 className="text-2xl font-bold text-brand-green">Калькулятор выгоды</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">Стоимость жилья (₽)</label>
                <input 
                  type="range" 
                  min="1000000" 
                  max="50000000" 
                  step="100000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="text-3xl font-bold text-brand-green mt-2">
                  {propertyPrice.toLocaleString()} ₽
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Переплата в банке</div>
                  <div className="text-xl font-bold text-red-600">+{ (propertyPrice * 1.2).toLocaleString() } ₽</div>
                  <div className="text-[10px] text-red-400 mt-1">+120% к стоимости</div>
                </div>
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">В кооперативе</div>
                  <div className="text-xl font-bold text-brand-green">0 ₽</div>
                  <div className="text-[10px] text-brand-green/60 mt-1">Беспроцентная рассрочка</div>
                </div>
              </div>

              <div className="p-4 bg-brand-green text-white rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs opacity-70">Ваша экономия</div>
                  <div className="text-2xl font-bold">{(propertyPrice * 1.2).toLocaleString()} ₽</div>
                </div>
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EURASIA TV SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 w-full">
              <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/tv/1200/675" 
                  alt="Eurasia TV Broadcast" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-gold text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Прямой эфир
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">ЕВРАЗИЯ ТВ: Главные новости кооперации</h3>
                  <p className="text-white/70">Смотрите нас в прямом эфире 24/7</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full space-y-6">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Tv className="text-brand-gold w-6 h-6" />
                  <h3 className="text-xl font-bold text-brand-green">Расписание программ</h3>
                </div>
                
                <div className="flex gap-2 mb-6">
                  {(['day', 'week', 'month'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTvTab(tab)}
                      className={`flex-grow py-2 rounded-xl text-xs font-bold transition-all ${
                        activeTvTab === tab 
                          ? 'bg-brand-green text-white shadow-md' 
                          : 'bg-white text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {tab === 'day' ? 'День' : tab === 'week' ? 'Неделя' : 'Месяц'}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {TV_SCHEDULE.map((prog) => (
                    <div key={prog.id} className="flex gap-4 p-3 hover:bg-white rounded-xl transition-colors group">
                      <div className="text-brand-gold font-bold text-sm shrink-0">{prog.time}</div>
                      <div>
                        <div className="font-bold text-brand-green text-sm group-hover:text-brand-gold transition-colors">{prog.title}</div>
                        <div className="text-[10px] text-gray-400">{prog.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <div className="bg-brand-gold/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-brand-gold font-bold text-sm mb-1">
                      <DollarSign className="w-4 h-4" />
                      Платим за просмотр
                    </div>
                    <p className="text-[10px] text-gray-600">Оставьте отзыв или заявку после просмотра и получите вознаграждение на паевой счет.</p>
                  </div>
                  <Link to="/dashboard" className="w-full bg-brand-green text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-all">
                    Авторизоваться
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-6">Наши программы</h2>
            <p className="text-gray-600 text-lg">
              Выберите подходящий способ приобретения жилья или участия в деятельности кооператива.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <motion.div 
                key={program.id}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full cursor-pointer group"
                onClick={() => setSelectedProgram(program.id)}
              >
                <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-green mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{program.shortDesc}</p>
                <button className="bg-brand-gold hover:bg-brand-gold-dark text-white py-3 px-6 rounded-xl font-bold transition-all self-start">
                  {program.btnText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER & ADVERTISING SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-green mb-4">Промо программы кооператива</h2>
            <p className="text-gray-500">Специальные возможности для активных участников и партнеров</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partner Program */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-green p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="w-8 h-8 text-brand-gold" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Партнёрская программа</h2>
                <p className="text-white/70 text-lg mb-8">
                  Рекомендуйте наш кооператив друзьям и знакомым. Получайте <span className="text-brand-gold font-bold">от 5% до 15%</span> к вашему паю за каждого нового зарегистрированного пайщика по вашей реферальной ссылке.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/dashboard" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center gap-2">
                    Получить ссылку в кабинете
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Pay for Advertising */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-gold p-10 rounded-[40px] border border-brand-gold/20 relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <Megaphone className="w-8 h-8 text-brand-green" />
                </div>
                <h2 className="text-3xl font-bold text-brand-green mb-6">Программа «Платим за рекламу»</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green">Для участников</h4>
                      <p className="text-sm text-brand-green/80">Рекламируйте товары партнеров и получайте % на увеличение пая.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green">Для рекламодателей</h4>
                      <p className="text-sm text-brand-green/80">Станьте участником и получите доступ к рекламной сети кооператива.</p>
                    </div>
                  </div>
                </div>
                <Link to="/dashboard" className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all inline-flex items-center gap-2">
                  Разместить рекламу
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-brand-green mb-4">Блог кооператива</h2>
              <p className="text-gray-500">Полезные статьи, кейсы и новости</p>
            </div>
            <Link to="/blog" className="text-brand-gold font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Смотреть больше <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BLOG_POSTS.slice(0, 4).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">{post.category}</div>
                  <h3 className="font-bold text-brand-green mb-4 line-clamp-2 group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                  <Link to="/blog" className="text-xs font-bold text-gray-400 flex items-center gap-1 group-hover:text-brand-gold transition-colors">
                    Подробнее <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONNAIRE SECTION */}
      <section id="questionnaire" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-[12px] shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-green mb-4">Онлайн-анкета</h2>
              <p className="text-gray-500">Заполните данные, и наш специалист свяжется с вами для консультации.</p>
            </div>
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); }}>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">ФИО</label>
                <input type="text" placeholder="Иванов Иван Иванович" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-gold outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-gold outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Город (Краснодарский край)</label>
                <input type="text" placeholder="Краснодар" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-gold outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Выберите программу</label>
                <select className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-brand-gold outline-none transition-all appearance-none">
                  <option>Совместный срочный выкуп</option>
                  <option>Строительство жилья</option>
                  <option>Агентство недвижимости</option>
                  <option>Накопительная ипотека</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-brand-gold" required />
                  <span className="text-sm text-gray-600">Я ознакомлен с уставом кооператива "Евразия"</span>
                </label>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS MODAL */}
      <AnimatePresence>
        {selectedProgram !== null && (
          <Modal isOpen={selectedProgram !== null} onClose={() => setSelectedProgram(null)}>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-xl flex items-center justify-center">
                  {programs.find(p => p.id === selectedProgram)?.icon}
                </div>
                <h2 className="text-3xl font-bold text-brand-green">
                  {programs.find(p => p.id === selectedProgram)?.title}
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600 mb-8 whitespace-pre-line">
                {programs.find(p => p.id === selectedProgram)?.fullDesc}
              </div>
              <div className="flex gap-4">
                <button 
                  className="bg-brand-gold text-white px-8 py-3 rounded-xl font-bold"
                  onClick={() => { setSelectedProgram(null); window.location.hash = 'questionnaire'; }}
                >
                  {programs.find(p => p.id === selectedProgram)?.btnText}
                </button>
                <button 
                  className="bg-gray-100 text-gray-600 px-8 py-3 rounded-xl font-bold"
                  onClick={() => setSelectedProgram(null)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
