
import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const AccommodationPage: React.FC = () => {
  return (
    <Section
      title="Alojamiento para Viajeros"
      subtitle="El hogar de las almas mochileras en la Carretera Austral."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
           <img 
              src="/assets/images/20250216_143349.jpg" 
              alt="Carpas en Refugio El Galpón"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
        </div>
        <div className="prose prose-lg text-stone-700 max-w-none">
          <h3>Espacio para Carpas</h3>
          <p>
            Nuestra principal característica y el corazón de la experiencia mochilera en El Galpón es nuestro <strong>amplio espacio para carpas</strong>. En temporada alta, el refugio se llena de viajeros, ciclistas y aventureros que montan su hogar temporal con nosotros, creando una vibrante comunidad.
          </p>
          <p>
            Buscamos ofrecer una auténtica "experiencia de vida", donde la aventura y la camaradería son lo más importante.
          </p>
          <h3>Servicios Incluidos</h3>
          <ul>
            <li>Acceso a la cocina comunitaria totalmente equipada.</li>
            <li>Baños compartidos y duchas con agua caliente.</li>
            <li>Uso de la biblioteca, área de fumadores y sector de asados.</li>
            <li>Descanso y diversión en nuestra famosa "Malla" gigante.</li>
          </ul>
          <div className="mt-8">
            <Link
              to="/contacto"
              className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
            >
              Consultar Disponibilidad y Tarifas
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AccommodationPage;
