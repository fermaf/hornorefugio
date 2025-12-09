
import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation, Trans } from 'react-i18next';

const VolunteerPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('volunteer.seo.title')}
        description={t('volunteer.seo.description')}
      />
      <Section
        title={t('volunteer.hero.title')}
        subtitle={t('volunteer.hero.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-stone-700 max-w-none">
            <h3>{t('volunteer.join.title')}</h3>
            <p>
              {t('volunteer.join.p1')}
            </p>
            <h3>{t('volunteer.exchange.title')}</h3>
            <ul>
              <li><Trans i18nKey="volunteer.exchange.l1" components={{ 1: <strong></strong> }} /></li>
              <li><Trans i18nKey="volunteer.exchange.l2" components={{ 1: <strong></strong> }} /></li>
            </ul>
            <p>
              {t('volunteer.exchange.p1')}
            </p>
            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
              >
                {t('volunteer.cta')}
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/20251025_182659.jpg"
              alt="Voluntarios trabajando en el refugio"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default VolunteerPage;
