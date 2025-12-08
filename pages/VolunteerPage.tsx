
import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const VolunteerPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Voluntariado | Refugio El Galpón"
        description="Únete a nuestra familia y vive una inmersión profunda en el espíritu de El Galpón. Programa de voluntariado en Hornopirén."
      />
      <Section
        title="Programa de Voluntariado"
        subtitle="Vive una inmersión profunda en el espíritu de El Galpón."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-stone-700 max-w-none">
            <h3>Únete a Nuestra Familia</h3>
            <p>
              Ofrecemos una oportunidad única para viajeros que buscan una "experiencia de vida" y desean conectar de manera más profunda con nuestro proyecto. A cambio de tu ayuda, te integrarás a nuestra comunidad y vivirás el día a día del refugio.
            </p>
            <h3>El Intercambio</h3>
            <ul>
              <li><strong>Tu Aporte:</strong> 4-5 horas diarias de trabajo. Las tareas son variadas y pueden incluir mantenimiento, cortar leña, pintar, limpiar, o ayudar en los invernaderos.</li>
              <li><strong>Nuestro Aporte:</strong> Alojamiento (espacio para carpa o colchoneta según disponibilidad) y alimentación casera preparada por Eva.</li>
            </ul>
            <p>
              El voluntariado es una excelente manera de compartir tus habilidades, aprender nuevas y ser parte fundamental de la energía que hace de El Galpón un lugar tan especial.
            </p>
            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
              >
                Postula para Voluntariado
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
