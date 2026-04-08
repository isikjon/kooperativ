import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Wallet, 
  BookOpen, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Lock, 
  CheckCircle2, 
  LogOut,
  Settings,
  Bell,
  Search,
  Plus,
  Minus,
  X,
  Megaphone,
  Copy,
  ExternalLink,
  Users,
  Layout,
  Image as ImageIcon
} from 'lucide-react';
import { COURSES, MY_BANNERS } from '../data';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'wallet' | 'education' | 'advertising'>('profile');
  const [balance, setBalance] = useState(150000);
  const [hasPaidFirstPai, setHasPaidFirstPai] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(50000);
  const [referralLink] = useState('https://eurasia-coop.ru/reg?ref=ivanov1245');

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Реферальная ссылка скопирована!');
  };

  const handlePayment = () => {
    setBalance(prev => prev + paymentAmount);
    setHasPaidFirstPai(true);
    setIsPaymentModalOpen(false);
    alert('Пай успешно внесен! Обучение теперь доступно.');
  };

  const handleWithdraw = () => {
    const amount = prompt('Введите сумму для вывода:');
    if (amount && parseInt(amount) <= balance) {
      setBalance(prev => prev - parseInt(amount));
      alert('Заявка на вывод пая принята. Срок обработки до 3-х рабочих дней.');
    } else {
      alert('Недостаточно средств или неверная сумма.');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-24 h-[calc(100vh-6rem)]">
        <div className="p-6 flex-grow">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-brand-green">Иван Иванов</div>
              <div className="text-xs text-gray-400">Пайщик №1245</div>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'profile', label: 'Профиль', icon: <User className="w-5 h-5" /> },
              { id: 'wallet', label: 'Счёт', icon: <Wallet className="w-5 h-5" /> },
              { id: 'education', label: 'Обучение', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'advertising', label: 'Реклама', icon: <Megaphone className="w-5 h-5" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === item.id 
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all">
            <LogOut className="w-5 h-5" />
            Выйти
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-10">
        <div className="max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-brand-green">Личный кабинет</h1>
              <p className="text-gray-500">Добро пожаловать в систему кооперации «Евразия»</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-3 bg-white rounded-xl border border-gray-200 text-gray-400 hover:text-brand-green transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="p-3 bg-white rounded-xl border border-gray-200 text-gray-400 hover:text-brand-green transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-3 gap-8"
              >
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-brand-green mb-6">Личные данные</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs text-gray-400 block mb-1 uppercase tracking-widest font-bold">ФИО</label>
                        <div className="font-bold text-gray-700">Иван Иванович Иванов</div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1 uppercase tracking-widest font-bold">Email</label>
                        <div className="font-bold text-gray-700">ivanov@example.com</div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1 uppercase tracking-widest font-bold">Телефон</label>
                        <div className="font-bold text-gray-700">+7 (999) 123-45-67</div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1 uppercase tracking-widest font-bold">Город</label>
                        <div className="font-bold text-gray-700">Краснодар</div>
                      </div>
                    </div>
                    <button className="mt-8 text-brand-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      Редактировать профиль <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <Users className="text-brand-gold w-6 h-6" />
                      <h3 className="text-xl font-bold text-brand-green">Партнёрская программа</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-6">
                      Приглашайте новых участников и получайте <span className="text-brand-gold font-bold">от 5% до 15%</span> к вашему паю за каждую регистрацию по вашей ссылке.
                    </p>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex-grow font-mono text-xs text-gray-500 truncate">{referralLink}</div>
                      <button 
                        onClick={copyReferralLink}
                        className="p-2 bg-white rounded-xl text-brand-gold hover:bg-brand-gold hover:text-white transition-all shadow-sm"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-brand-green mb-6">Мои программы</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-brand-green">Накопительная ипотека</div>
                            <div className="text-xs text-gray-400">Активна с 12.03.2026</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-brand-gold">150 000 ₽</div>
                          <div className="text-xs text-gray-400">Накоплено</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-brand-green p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="text-white/60 text-sm mb-2">Общий баланс паев</div>
                      <div className="text-4xl font-bold mb-6">{balance.toLocaleString()} ₽</div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => setIsPaymentModalOpen(true)}
                          className="flex-grow bg-brand-gold text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-gold-dark transition-all"
                        >
                          Внести пай
                        </button>
                        <button 
                          onClick={handleWithdraw}
                          className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-brand-green mb-4">Статус обучения</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${hasPaidFirstPai ? 'bg-brand-green/10 text-brand-green' : 'bg-gray-100 text-gray-400'}`}>
                        {hasPaidFirstPai ? <CheckCircle2 className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="font-bold text-brand-green">{hasPaidFirstPai ? 'Доступ открыт' : 'Доступ закрыт'}</div>
                        <div className="text-xs text-gray-400">{hasPaidFirstPai ? 'Все курсы активны' : 'Внесите 1-й пай'}</div>
                      </div>
                    </div>
                    {!hasPaidFirstPai && (
                      <button 
                        onClick={() => setIsPaymentModalOpen(true)}
                        className="w-full bg-brand-gold/10 text-brand-gold py-3 rounded-xl font-bold text-sm hover:bg-brand-gold hover:text-white transition-all"
                      >
                        Активировать обучение
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'wallet' && (
              <motion.div
                key="wallet"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold text-brand-green">История операций</h3>
                      <div className="flex gap-2">
                        <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-brand-green transition-all"><Search className="w-5 h-5" /></button>
                        <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-brand-green transition-all"><Plus className="w-5 h-5" /></button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {[
                        { type: 'in', title: 'Взнос по программе «Накопительная ипотека»', amount: '+50 000 ₽', date: '12.03.2026', status: 'Выполнено' },
                        { type: 'in', title: 'Взнос по программе «Накопительная ипотека»', amount: '+50 000 ₽', date: '12.02.2026', status: 'Выполнено' },
                        { type: 'in', title: 'Взнос по программе «Накопительная ипотека»', amount: '+50 000 ₽', date: '12.01.2026', status: 'Выполнено' },
                      ].map((op, i) => (
                        <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${op.type === 'in' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                              {op.type === 'in' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                            </div>
                            <div>
                              <div className="font-bold text-brand-green text-sm">{op.title}</div>
                              <div className="text-xs text-gray-400">{op.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${op.type === 'in' ? 'text-green-500' : 'text-red-500'}`}>{op.amount}</div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{op.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6">
                      <CreditCard className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-green mb-2">Пополнить баланс</h3>
                    <p className="text-gray-500 text-sm mb-8">Внесите паевой взнос моментально банковской картой или через СБП.</p>
                    <button 
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="w-full bg-brand-gold text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-gold-dark transition-all"
                    >
                      Пополнить
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {!hasPaidFirstPai && (
                  <div className="bg-brand-gold/10 border border-brand-gold/20 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-brand-gold text-white rounded-full flex items-center justify-center shrink-0">
                      <Lock className="w-10 h-10" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-bold text-brand-green mb-2">Обучение заблокировано</h3>
                      <p className="text-gray-600">Для активации образовательной платформы необходимо внести первый паевой взнос в любую из программ кооператива.</p>
                    </div>
                    <button 
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="bg-brand-gold text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-brand-gold-dark transition-all shrink-0"
                    >
                      Внести пай
                    </button>
                  </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {COURSES.map((course) => (
                    <div 
                      key={course.id}
                      className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all ${!hasPaidFirstPai ? 'opacity-60 grayscale' : 'hover:shadow-xl hover:-translate-y-1'}`}
                    >
                      <div className="relative h-40">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        {!hasPaidFirstPai && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Lock className="text-white w-8 h-8" />
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-brand-green mb-2">{course.title}</h4>
                        <p className="text-xs text-gray-500 mb-6">{course.description}</p>
                        <button 
                          disabled={!hasPaidFirstPai}
                          className={`w-full py-3 rounded-xl font-bold transition-all ${
                            hasPaidFirstPai 
                              ? 'bg-brand-green text-white hover:bg-brand-green/90' 
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {hasPaidFirstPai ? 'Начать обучение' : 'Недоступно'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'advertising' && (
              <motion.div
                key="advertising"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-brand-green">Мои баннеры</h3>
                        <button className="flex items-center gap-2 bg-brand-gold text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-gold-dark transition-all">
                          <Plus className="w-4 h-4" />
                          Разместить рекламу
                        </button>
                      </div>
                      <div className="space-y-4">
                        {MY_BANNERS.map((banner) => (
                          <div key={banner.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <img src={banner.image} alt={banner.title} className="w-full sm:w-32 h-20 object-cover rounded-xl" referrerPolicy="no-referrer" />
                            <div className="flex-grow flex flex-col justify-between">
                              <div>
                                <div className="font-bold text-brand-green">{banner.title}</div>
                                <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
                                  banner.status === 'active' ? 'text-green-500' : 'text-brand-gold'
                                }`}>
                                  {banner.status === 'active' ? 'Активен' : 'На модерации'}
                                </div>
                              </div>
                              <div className="flex gap-3 mt-2">
                                <button className="text-xs text-brand-gold font-bold hover:underline">Редактировать</button>
                                <button className="text-xs text-red-500 font-bold hover:underline">Удалить</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <Layout className="text-brand-gold w-6 h-6" />
                        <h3 className="text-xl font-bold text-brand-green">Дропшиппинг</h3>
                      </div>
                      <p className="text-gray-500 text-sm mb-6">
                        Используйте вашу персональную ссылку для продажи товаров партнеров и получайте комиссионные сразу на паевой счет.
                      </p>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex-grow font-mono text-xs text-gray-500 truncate">https://eurasia-shop.ru/ivanov1245</div>
                        <button className="p-2 bg-white rounded-xl text-brand-gold hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-brand-green p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <h3 className="text-lg font-bold mb-4 relative z-10">Статистика рекламы</h3>
                      <div className="space-y-4 relative z-10">
                        <div>
                          <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Просмотры</div>
                          <div className="text-2xl font-bold">1,245</div>
                        </div>
                        <div>
                          <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Клики</div>
                          <div className="text-2xl font-bold">89</div>
                        </div>
                        <div>
                          <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Доход (₽)</div>
                          <div className="text-2xl font-bold text-brand-gold">12,400 ₽</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-4">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-brand-green mb-2">Нужен баннер?</h4>
                      <p className="text-xs text-gray-500 mb-4">Наши дизайнеры помогут создать привлекательный баннер для вашей рекламы.</p>
                      <button className="w-full bg-gray-50 text-brand-green py-3 rounded-xl font-bold text-xs hover:bg-gray-100 transition-all">
                        Заказать дизайн
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Payment Modal */}
      <AnimatePresence>
        {isPaymentModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl max-w-md w-full p-8 relative"
            >
              <button onClick={() => setIsPaymentModalOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-brand-gold w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green">Внести пай</h3>
                <p className="text-gray-500">Выберите сумму и способ оплаты</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Сумма взноса (₽)</label>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setPaymentAmount(prev => Math.max(1000, prev - 10000))} className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200"><Minus className="w-4 h-4" /></button>
                    <div className="flex-grow text-center text-2xl font-bold text-brand-green">{paymentAmount.toLocaleString()} ₽</div>
                    <button onClick={() => setPaymentAmount(prev => prev + 10000)} className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 rounded-2xl border-2 border-brand-gold bg-brand-gold/5 flex flex-col items-center gap-2">
                    <CreditCard className="text-brand-gold w-6 h-6" />
                    <span className="text-xs font-bold text-brand-green">Картой</span>
                  </button>
                  <button className="p-4 rounded-2xl border-2 border-gray-100 hover:border-brand-gold/30 flex flex-col items-center gap-2">
                    <Wallet className="text-gray-400 w-6 h-6" />
                    <span className="text-xs font-bold text-gray-400">С баланса</span>
                  </button>
                </div>

                <button 
                  onClick={handlePayment}
                  className="w-full bg-brand-green text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-green/90 transition-all"
                >
                  Оплатить {paymentAmount.toLocaleString()} ₽
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
