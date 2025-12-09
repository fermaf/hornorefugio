
import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation, Trans } from 'react-i18next';

const AccommodationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('accommodation.seo.title')}
        description={t('accommodation.seo.description')}
      />
      <Section
        title={t('accommodation.hero.title')}
        subtitle={t('accommodation.hero.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/images/20250216_143349.jpg"
              alt="Carpas en Refugio El Galpón"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="prose prose-lg text-stone-700 max-w-none">
            <h3>{t('accommodation.camping.title')}</h3>
            <p>
              <Trans i18nKey="accommodation.camping.p1" components={{ 1: <strong></strong>, 2: <strong></strong>, 3: <strong></strong> }} />
            </p>
            <p>
              {t('accommodation.camping.p2')}
            </p>
            <h3>{t('accommodation.services.title')}</h3>
            <ul>
              <li>{t('accommodation.services.l1')}</li>
              <li>{t('accommodation.services.l2')}</li>
              <li>{t('accommodation.services.l3')}</li>
              <li>{t('accommodation.services.l4')}</li>
            </ul>
            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
              >
                {t('accommodation.cta')}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AccommodationPage;
