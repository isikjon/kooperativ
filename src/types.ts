import React from 'react';

export type Category = 'Все' | 'Квартиры' | 'Дома' | 'Участки' | 'Спецпредложение';
export type EventCategory = 'Все' | 'События' | 'Презентация' | 'Обучение' | 'Собрание';
export type GalleryCategory = 'Все' | 'Сданные объекты' | 'Мероприятия' | 'Вебинары' | 'Пайщики';

export interface ShopItem {
  id: number;
  title: string;
  category: Category;
  price: number;
  image: string;
}

export interface EventItem {
  id: number;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
}

export interface BlogItem {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  tags?: string[];
  keywords?: string[];
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  category: GalleryCategory;
  url: string;
  thumbnail: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Program {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  conditions: string[];
  minAmount: string;
  returnTerms: string;
  image: string;
  icon: string; // Icon name from Lucide
}

export interface ParticipationStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TVProgram {
  id: number;
  time: string;
  title: string;
  description: string;
}

export interface AdBanner {
  id: number;
  title: string;
  image: string;
  status: 'active' | 'pending' | 'rejected';
}
