
import React from 'react';
import Section from '../components/Section';

const ContactPage: React.FC = () => {
  return (
    <Section
      title="Ubicación y Contacto"
      subtitle="Encuéntranos en tu viaje por la Carretera Austral y contáctanos para cualquier consulta."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="prose prose-lg text-stone-700">
          <h3>Nuestra Dirección</h3>
          <p>
            Refugio El Galpón<br />
            Hornopirén, Comuna de Hualaihué<br />
            Región de Los Lagos, Chile
          </p>
          
          <h3>Contacto Directo</h3>
          <p>
            <strong>Email:</strong> <a href="mailto:contacto@elgalpon.cl" className="text-amber-600 hover:text-amber-800">contacto@hornorefugio.cl</a><br />
            <strong>Teléfono / WhatsApp:</strong> <a href="tel:+569942028429" className="text-amber-600 hover:text-amber-800">+56 942028429</a>
          </p>

          <div className="mt-8">
            <img src="/assets/images/20250807_172613.jpg" alt="Mapa de ubicación del refugio" className="rounded-lg shadow-lg w-full"/>
             <p className="text-sm text-center mt-2 text-stone-500">Mapa referencial. Búscanos en Hornopirén.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6">Envíanos un Mensaje</h3>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nombre</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700">Mensaje</label>
              <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                Enviar Consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
