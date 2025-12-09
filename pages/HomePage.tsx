
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Section from '../components/Section';
import { CAROUSEL_IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation, Trans } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
        <ImageCarousel images={CAROUSEL_IMAGES} />
        <div className="absolute z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg">
            {t('home.hero.title')}
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-shadow">
            {t('home.hero.subtitle')}
          </p>
          <Link
            to="/alojamiento"
            className="mt-8 inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
          >
            {t('home.hero.cta')}
          </Link>
        </div>
      </div>
      <Section title={t('home.community.title')} className="bg-stone-50">
        <div className="max-w-3xl mx-auto text-center text-xl text-stone-700 leading-relaxed">
          <p>
            <Trans i18nKey="home.community.p1" components={{ 1: <strong></strong> }} />
          </p>
          <p className="mt-4">
            {t('home.community.p2')}
          </p>
          <Link
            to="/refugio"
            className="mt-8 inline-block text-amber-700 font-semibold hover:text-amber-800"
          >
            {t('home.community.link')} &rarr;
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
