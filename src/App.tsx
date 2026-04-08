import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Education } from './pages/Education';
import { Management } from './pages/Management';
import { Contacts } from './pages/Contacts';
import { Dashboard } from './pages/Dashboard';
import { Questionnaire } from './pages/Questionnaire';
import { Participation } from './pages/Participation';
import { Buyout } from './pages/Buyout';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-brand-gold selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/education" element={<Education />} />
            <Route path="/management" element={<Management />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/participation" element={<Participation />} />
            <Route path="/buyout" element={<Buyout />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
