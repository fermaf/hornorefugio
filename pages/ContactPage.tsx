
import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
      />
      <Section
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose prose-lg text-stone-700">
            <h3>{t('contact.address.title')}</h3>
            <p>
              {t('contact.address.l1')}<br />
              {t('contact.address.l2')}<br />
              {t('contact.address.l3')}
            </p>

            <h3>{t('contact.direct.title')}</h3>
            <p>
              <strong>{t('contact.direct.email')}</strong> <a href="mailto:contacto@hornorefugio.cl" className="text-amber-600 hover:text-amber-800">contacto@hornorefugio.cl</a><br />
              <strong>{t('contact.direct.whatsapp')}</strong> <a href="https://wa.me/56942028429" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800">+56 942028429</a><br />
              <strong>{t('contact.direct.phones')}</strong> <a href="tel:+56942028429" className="text-amber-600 hover:text-amber-800">+56 942028429 (Eva)</a> / <a href="tel:+56938853446" className="text-amber-600 hover:text-amber-800">+56 938853446 (Kika)</a>
            </p>

            <div className="mt-8">
              <iframe
                src="https://maps.google.com/maps?q=-41.960082,-72.464849&hl=es&z=16&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
                title="Mapa de ubicación Refugio El Galpón"
              ></iframe>
              <p className="text-sm text-center mt-2 text-stone-500">{t('contact.map.caption')}</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">{t('contact.form.title')}</h3>
            <form action="https://formspree.io/f/mvgebreb" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">{t('contact.form.name')}</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">{t('contact.form.email')}</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">{t('contact.form.message')}</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
