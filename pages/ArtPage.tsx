import React from 'react';
import Section from '../components/Section';
import { MURAL_IMAGES } from '../constants';

const ArtPage: React.FC = () => {
  return (
    <>
      <Section
        title="Arte y Experiencias"
        subtitle="El Galpón es un lienzo vivo donde artistas y viajeros dejan su huella."
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-stone-700 leading-relaxed">
                El arte es el alma de El Galpón. Nuestras paredes cuentan historias a través de murales vibrantes, creados por viajeros y artistas locales que han formado parte de nuestra comunidad a lo largo de los años. Cada pieza es un testimonio del espíritu colaborativo y la creatividad que fluye en este espacio, convirtiendo el refugio en una galería en constante evolución.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {MURAL_IMAGES.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={image} 
                alt={`Mural en El Galpón ${index + 1}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="Un Centro Cultural Referente"
        subtitle="Más que un refugio, un punto de encuentro para la comunidad."
        className="bg-stone-50"
      >
        <div className="max-w-3xl mx-auto text-center">
            <img src="/assets/images/art-event.jpg" alt="Evento cultural en El Galpón" className="rounded-lg shadow-lg mx-auto mb-8"/>
          <p className="text-xl text-stone-700 leading-relaxed">
            El Refugio se ha transformado en un "centro cultural icono referente" en Hornopirén. Celebramos distintos tipos de eventos: cumpleaños, conciertos, ferias de artesanía y encuentros artísticos que enriquecen la vida local y la experiencia de nuestros visitantes.
          </p>
        </div>
      </Section>
    </>
  );
};

export default ArtPage;