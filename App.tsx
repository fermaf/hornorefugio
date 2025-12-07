
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccommodationPage from './pages/AccommodationPage';
import ArtPage from './pages/ArtPage';
import VolunteerPage from './pages/VolunteerPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/refugio" element={<AboutPage />} />
          <Route path="/alojamiento" element={<AccommodationPage />} />
          <Route path="/arte" element={<ArtPage />} />
          <Route path="/voluntariado" element={<VolunteerPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
