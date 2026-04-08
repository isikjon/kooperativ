import React from 'react';

export const Mechanism = () => {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-brand-green mb-8">Как это работает?</h2>
            <div className="space-y-12">
              {[
                { step: '01', title: 'Пай от 5%', desc: 'Вы вносите первоначальный паевой взнос, становясь полноправным участником кооператива.' },
                { step: '02', title: 'Срочный выкуп', desc: 'Если у вас есть старая недвижимость, мы выкупаем её за 24 часа в счет нового жилья.' },
                { step: '03', title: 'Выбор из магазина', desc: 'Выбираете любой объект из нашего каталога или на открытом рынке.' },
                { step: '04', title: 'Рассрочка 0%', desc: 'Заезжаете в новое жилье и выплачиваете остаток без банковских процентов.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="text-5xl font-black text-brand-gold/20 font-roboto">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-green mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-3xl blur-2xl"></div>
            <img 
              src="https://picsum.photos/seed/mechanism/800/1000" 
              alt="Mechanism" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
