import { ShopItem, EventItem, BlogItem, GalleryItem, Course, Program, ParticipationStep, TVProgram, AdBanner } from './types';

export const PARTICIPATION_STEPS: ParticipationStep[] = [
  { id: 1, title: 'Регистрация', description: 'Заполните анкету на сайте и получите доступ в личный кабинет.', icon: 'UserPlus' },
  { id: 2, title: 'Выбор программы', description: 'Ознакомьтесь с нашими программами и выберите подходящую для вас.', icon: 'Layout' },
  { id: 3, title: 'Вступительный взнос', description: 'Внесите разовый вступительный взнос для активации статуса пайщика.', icon: 'CreditCard' },
  { id: 4, title: 'Паевой взнос', description: 'Начните вносить паевые взносы согласно выбранной программе.', icon: 'Wallet' },
  { id: 5, title: 'Получение выгоды', description: 'Пользуйтесь всеми преимуществами кооперации и достигайте своих целей.', icon: 'TrendingUp' },
];

export const TV_SCHEDULE: TVProgram[] = [
  { id: 1, time: '09:00', title: 'Утренний дайджест', description: 'Новости кооператива и рынка недвижимости.' },
  { id: 2, time: '11:00', title: 'Школа пайщика', description: 'Образовательный блок для новых участников.' },
  { id: 3, time: '14:00', title: 'Прямой эфир с правлением', description: 'Ответы на вопросы участников в реальном времени.' },
  { id: 4, time: '16:00', title: 'Обзор объектов', description: 'Видеоэкскурсии по строящимся и сданным объектам.' },
  { id: 5, time: '19:00', title: 'Вечерний вебинар', description: 'Тематические встречи с экспертами отрасли.' },
];

export const MY_BANNERS: AdBanner[] = [
  { id: 1, title: 'Реклама ЖК "Евразия"', image: 'https://picsum.photos/seed/banner1/600/200', status: 'active' },
  { id: 2, title: 'Акция: Скидка на паи', image: 'https://picsum.photos/seed/banner2/600/200', status: 'pending' },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: 1, title: 'ЖК "Евразия-Парк", 2-к квартира', category: 'Квартиры', price: 5500000, image: 'https://picsum.photos/seed/apt1/600/400' },
  { id: 2, title: 'Загородный дом "Кедр"', category: 'Дома', price: 8200000, image: 'https://picsum.photos/seed/house1/600/400' },
  { id: 3, title: 'Участок в поселке "Золотая Долина"', category: 'Участки', price: 1200000, image: 'https://picsum.photos/seed/land1/600/400' },
  { id: 4, title: 'Пентхаус с террасой (Спеццена)', category: 'Спецпредложение', price: 12000000, image: 'https://picsum.photos/seed/spec1/600/400' },
  { id: 5, title: '1-к студия в центре', category: 'Квартиры', price: 3800000, image: 'https://picsum.photos/seed/apt2/600/400' },
];

export const EVENTS: EventItem[] = [
  { id: 1, title: 'Аукцион срочного выкупа', category: 'События', date: '15.04.2026', time: '12:00' },
  { id: 2, title: 'Презентация ЖК "Евразия-Парк"', category: 'Презентация', date: '20.04.2026', time: '18:30' },
  { id: 3, title: 'Как работают кооперативы в мире', category: 'Обучение', date: '22.04.2026', time: '19:00' },
  { id: 4, title: 'Годовое собрание пайщиков', category: 'Собрание', date: '30.04.2026', time: '10:00' },
  { id: 5, title: 'День открытых паев', category: 'События', date: '05.05.2026', time: '11:00' },
];

export const BLOG_POSTS: BlogItem[] = [
  { 
    id: 1, 
    title: 'Как канадская Хадаша выкупила квартал за 3 года', 
    category: 'Мировая практика', 
    excerpt: 'История успеха одного из самых эффективных кооперативов Северной Америки...',
    content: 'Кооператив Хадаша в Канаде стал символом финансовой независимости. Используя принцип коллективного накопления, участники смогли выкупить целый жилой квартал в Торонто всего за три года. Основной секрет — отсутствие банковских процентов и строгая дисциплина паевых взносов.',
    image: 'https://picsum.photos/seed/canada/800/500',
    tags: ['Кооперация', 'Канада', 'Жилье'],
    keywords: ['выкуп жилья', 'канадский опыт', 'паевой взнос']
  },
  { 
    id: 2, 
    title: 'История Ивана: продал долю за 2 дня через кооператив', 
    category: 'Кейс', 
    excerpt: 'Реальный опыт срочного выкупа недвижимости в сложных рыночных условиях...',
    content: 'Ивану срочно требовались средства для переезда. Обычные агентства предлагали срок продажи от 3 месяцев. Обратившись в "Евразию", он получил оценку в течение часа, а через 2 дня сделка была закрыта. Кооператив выкупил долю по рыночной цене за вычетом минимальной комиссии.',
    image: 'https://picsum.photos/seed/ivan/800/500',
    tags: ['Срочный выкуп', 'Кейс', 'Недвижимость'],
    keywords: ['продать долю', 'быстрая сделка', 'кооператив евразия']
  },
  { 
    id: 3, 
    title: 'Ипотека vs Кооператив: таблица переплаты', 
    category: 'Разбор', 
    excerpt: 'Наглядное сравнение банковского кредита и паевого участия в цифрах...',
    content: 'При покупке квартиры за 5 млн рублей в ипотеку на 20 лет, итоговая выплата банку составит около 11-12 млн рублей. В кооперативе "Евразия" вы возвращаете только стоимость жилья плюс небольшие членские взносы на содержание аппарата. Экономия составляет более 100%.',
    image: 'https://picsum.photos/seed/calc/800/500',
    tags: ['Ипотека', 'Экономия', 'Расчет'],
    keywords: ['сравнение ипотеки', 'переплата по кредиту', 'выгода кооператива']
  },
  { 
    id: 4, 
    title: 'Автомобиль через кооператив: как это работает', 
    category: 'Авто', 
    excerpt: 'Пошаговое руководство по приобретению авто без кредитов и переплат...',
    content: 'Программа автокооперации позволяет участникам объединять средства для покупки автомобилей. Вы вносите часть стоимости, а остальное добавляет кооператив. Возврат средств происходит без процентов, что делает покупку авто доступной для каждого.',
    image: 'https://picsum.photos/seed/car_blog/800/500',
    tags: ['Авто', 'Рассрочка', 'Программы'],
    keywords: ['купить авто', 'авто без кредита', 'кооператив авто']
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, type: 'image', category: 'Сданные объекты', url: 'https://picsum.photos/seed/obj1/1200/800', thumbnail: 'https://picsum.photos/seed/obj1/400/300' },
  { id: 2, type: 'image', category: 'Мероприятия', url: 'https://picsum.photos/seed/event1/1200/800', thumbnail: 'https://picsum.photos/seed/event1/400/300' },
  { id: 3, type: 'video', category: 'Вебинары', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://picsum.photos/seed/webinar1/400/300' },
  { id: 4, type: 'image', category: 'Пайщики', url: 'https://picsum.photos/seed/people1/1200/800', thumbnail: 'https://picsum.photos/seed/people1/400/300' },
  { id: 5, type: 'video', category: 'Сданные объекты', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://picsum.photos/seed/obj2/400/300' },
  { id: 6, type: 'image', category: 'Мероприятия', url: 'https://picsum.photos/seed/event2/1200/800', thumbnail: 'https://picsum.photos/seed/event2/400/300' },
];

export const NAV_ITEMS = [
  { label: 'Главная', href: '/' },
  { label: 'Участие', href: '/participation' },
  { label: 'Программы', href: '/programs' },
  { label: 'Выкуп', href: '/buyout' },
  { label: 'Обучение', href: '/education' },
  { label: 'Блог', href: '/blog' },
  { label: 'Руководство', href: '/management' },
  { label: 'Галерея', href: '/gallery' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'Кабинет', href: '/dashboard' },
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: 'Совместный срочный выкуп',
    icon: 'Zap',
    shortDesc: 'Пайщик вносит пай, который участвует в срочном выкупе объектов недвижимости.',
    fullDesc: 'Кооператив формирует общий пул из паевых взносов. Средства используются для срочного выкупа квартир, домов и участков по ценам ниже рыночных. Прибыль после реализации распределяется между участниками.',
    conditions: ['Быть членом кооператива', 'Минимальный срок участия 3 месяца'],
    minAmount: '50 000 ₽',
    returnTerms: 'После реализации объекта (от 1 до 6 месяцев)',
    image: 'https://picsum.photos/seed/buyout/800/500'
  },
  {
    id: 2,
    title: 'Строительство жилья',
    icon: 'Building2',
    shortDesc: 'Строительство недвижимости на основе собственного производства арболитных блоков.',
    fullDesc: 'Кооператив строит коттеджи, таунхаусы и фрейм-дома. Пайщики получают скидку до 20% или долю в прибыли от продажи готовых объектов.',
    conditions: ['Паевой взнос от 10%', 'Участие в строительном пуле'],
    minAmount: '100 000 ₽',
    returnTerms: 'По завершению строительства и продажи (от 6 до 12 месяцев)',
    image: 'https://picsum.photos/seed/build/800/500'
  },
  {
    id: 3,
    title: 'Агентство недвижимости «Евразия»',
    icon: 'Handshake',
    shortDesc: 'Трудоустройство и обучение в профессии «Агент по недвижимости».',
    fullDesc: 'Бесплатное обучение для пайщиков. Доход состоит из оклада и процентов. Часть прибыли агентства идет в фонд «Моя Квартира».',
    conditions: ['Членство в кооперативе', 'Прохождение базового курса'],
    minAmount: '10 000 ₽ (членский взнос)',
    returnTerms: 'Ежемесячные выплаты процентов',
    image: 'https://picsum.photos/seed/agency/800/500'
  },
  {
    id: 4,
    title: 'Накопительная ипотека',
    icon: 'PiggyBank',
    shortDesc: 'Государственная поддержка 30% и накопление на жилье без процентов.',
    fullDesc: 'Программа накопления первоначального взноса с бюджетной помощью в Краснодарском крае. Гибкие сроки и отсутствие переплат.',
    conditions: ['Проживание в Краснодарском крае', 'Ежемесячный взнос от 3 000 ₽'],
    minAmount: '3 000 ₽/мес',
    returnTerms: 'Целевое использование через 1-5 лет',
    image: 'https://picsum.photos/seed/mortgage/800/500'
  }
];

export const COURSES: Course[] = [
  { id: 1, title: 'Агент недвижимости', description: 'Освойте профессию риелтора с нуля.', image: 'https://picsum.photos/seed/course1/400/250' },
  { id: 2, title: 'Продажи', description: 'Искусство убеждения и закрытия сделок.', image: 'https://picsum.photos/seed/course2/400/250' },
  { id: 3, title: 'Академия Кровельщика', description: 'Профессиональный монтаж кровли.', image: 'https://picsum.photos/seed/course3/400/250' },
  { id: 4, title: 'Строим Канадский Дом', description: 'Технологии каркасного домостроения.', image: 'https://picsum.photos/seed/course4/400/250' },
  { id: 5, title: 'Школа Мета Коуча', description: 'Психология успеха и наставничество.', image: 'https://picsum.photos/seed/course5/400/250' },
  { id: 6, title: 'Бизнес тренер с нуля', description: 'Как обучать других и зарабатывать.', image: 'https://picsum.photos/seed/course6/400/250' },
  { id: 7, title: 'Производство арболитных блоков', description: 'Технология создания эко-блоков.', image: 'https://picsum.photos/seed/course7/400/250' },
  { id: 8, title: 'Пермакультурное земледелие', description: 'Устойчивое сельское хозяйство.', image: 'https://picsum.photos/seed/course8/400/250' },
];
