
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Section from '../components/Section';
import { CAROUSEL_IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <div>
      <SEO
        title="Inicio | HornoRefugio el Galpón Hornopirén"
        description="Bienvenido a Refugio El Galpón, tu hogar en la Carretera Austral. Camping, arte y comunidad en Hornopirén."
      />
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
        <ImageCarousel images={CAROUSEL_IMAGES} />
        <div className="absolute z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg">
            HornoRefugio el Galpón Hornopirén
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-shadow">
            Tu parada en la Carretera Austral. Un espacio de encuentro y aventura.
          </p>
          <Link
            to="/alojamiento"
            className="mt-8 inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
          >
            Reserva tu Espacio
          </Link>
        </div>
      </div>
      <Section title="Una Experiencia Comunitaria" className="bg-stone-50">
        <div className="max-w-3xl mx-auto text-center text-xl text-stone-700 leading-relaxed">
          <p>
            Más que un simple alojamiento u hospedaje, <strong>Refugio el Galpón</strong> es el hogar de las almas mochileras, un punto de encuentro para viajeros de todo el mundo. Aquí se vive la aventura comunitaria, se comparten historias al calor de la cocina y se crean lazos que perduran.
          </p>
          <p className="mt-4">
            Construido con amor, materiales reciclados y un profundo respeto por la naturaleza, te invitamos a ser parte de nuestra historia.
          </p>
          <Link
            to="/refugio"
            className="mt-8 inline-block text-amber-700 font-semibold hover:text-amber-800"
          >
            Conoce Nuestro Espíritu &rarr;
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
