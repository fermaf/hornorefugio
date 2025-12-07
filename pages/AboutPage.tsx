
import React from 'react';
import Section from '../components/Section';
import { COMMON_SPACES } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <>
      <Section
        title="Nuestro Espíritu"
        subtitle="La historia y el corazón de Refugio El Galpón."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-stone-700 max-w-none">
            <p>
              El Refugio El Galpón nació en 2010 de la visión de <strong>Ricardo Licanqueo</strong>, quien soñó con un espacio para el arte, la cultura y la comunidad en el corazón de Hornopirén. Construido principalmente con <strong>materiales reciclados</strong> y una dedicación infinita, el refugio abrió sus puertas a los primeros viajeros en 2014.
            </p>
            <p>
              Hoy, su familia, Eva, Kika y Danny, continúan este legado, conservando intacta la visión de su fundador: ser un <strong>"importante patrimonio"</strong> y un punto de encuentro para creativos, aventureros y soñadores.
            </p>
            <blockquote>
              "Cada rincón del Refugio se nota que está hecho con amor."
            </blockquote>
          </div>
          <div>
            <img 
              src="/assets/images/20251029_224232.jpg" 
              alt="Interior del Refugio El Galpón"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>
      <Section
        title="Zonas Comunes: El Alma del Encuentro"
        subtitle="Nuestros espacios están diseñados para fomentar la convivencia y crear una verdadera experiencia comunitaria."
        className="bg-stone-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMON_SPACES.map((space) => (
            <div key={space.name} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center mb-4">
                {space.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-800">{space.name}</h3>
              <p className="mt-2 text-stone-600">{space.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
