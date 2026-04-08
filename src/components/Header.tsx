import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../data';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-brand-green shadow-xl py-3' : 'bg-brand-green/95 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
            <Globe className="text-brand-gold w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white leading-none">ЕВРАЗИЯ</span>
            <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-1">Краснодар</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.href} 
              className={({ isActive }) => 
                `text-[13px] font-semibold hover:text-brand-gold transition-colors whitespace-nowrap ${
                  isActive ? 'text-brand-gold' : 'text-white/90'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/questionnaire" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-5 py-2 rounded-full text-[13px] font-bold transition-all transform hover:scale-105 shadow-lg ml-2">
            Вступить
          </Link>
        </nav>

        <button className="xl:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 xl:hidden flex flex-col gap-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.label} 
                to={item.href} 
                className={({ isActive }) => 
                  `text-lg font-medium ${isActive ? 'text-brand-gold' : 'text-gray-800'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link 
              to="/questionnaire" 
              className="bg-brand-gold text-white py-3 rounded-xl font-bold mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Вступить
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
