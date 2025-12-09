
import React from 'react';
import Section from '../components/Section';
import { COMMON_SPACES } from '../constants';
import SEO from '../components/SEO';
import { useTranslation, Trans } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
      />
      <Section
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-stone-700 max-w-none">
            <p>
              <Trans i18nKey="about.story.p1" components={{ 1: <strong></strong>, 2: <strong></strong>, 3: <strong></strong>, 4: <strong></strong> }} />
            </p>
            <p>
              <Trans i18nKey="about.story.p2" components={{ 1: <strong></strong> }} />
            </p>
            <blockquote>
              {t('about.story.quote')}
            </blockquote>
          </div>
          <div>
            <img
              src="/assets/images/20251029_224232.jpg"
              alt="Interior del Refugio El Galpón"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
      <Section
        title={t('about.commonSpaces.title')}
        subtitle={t('about.commonSpaces.subtitle')}
        className="bg-stone-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMON_SPACES.map((space) => (
            <div key={space.name} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center mb-4">
                {space.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-800">{t(space.name)}</h3>
              <p className="mt-2 text-stone-600">{t(space.description)}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
