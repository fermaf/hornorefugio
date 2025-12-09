import React from 'react';
import Section from '../components/Section';
import { MURAL_IMAGES } from '../constants';
import SEO from '../components/SEO';
import { useTranslation, Trans } from 'react-i18next';

const ArtPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('art.seo.title')}
        description={t('art.seo.description')}
      />
      <Section
        title={t('art.hero.title')}
        subtitle={t('art.hero.subtitle')}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            <Trans i18nKey="art.hero.p1" components={{ 1: <strong></strong> }} />
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {MURAL_IMAGES.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image}
                alt={`Mural en El Galpón ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>
      <Section
        title={t('art.cultural.title')}
        subtitle={t('art.cultural.subtitle')}
        className="bg-stone-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <img src="/assets/images/art-event.jpg" alt="Evento cultural en El Galpón" className="rounded-lg shadow-lg mx-auto mb-8" loading="lazy" />
          <p className="text-xl text-stone-700 leading-relaxed">
            {t('art.cultural.p1')}
          </p>
        </div>
      </Section>
    </>
  );
};

export default ArtPage;