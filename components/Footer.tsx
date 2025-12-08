
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-stone-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">HornoRefugio el Galpón Hornopirén</h3>
            <p className="text-sm text-stone-300">Tu hogar en la Carretera Austral.</p>
            <p className="text-sm text-stone-300">Hornopirén, Región de Los Lagos, Chile.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contacto</h3>
            <p className="text-sm text-stone-300">Email: <a href="mailto:contacto@hornorefugio.cl" className="hover:text-amber-400">contacto@hornorefugio.cl</a></p>
            <p className="text-sm text-stone-300">WhatsApp: <a href="https://wa.me/56942028429" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">+56 942028429</a></p>
            <p className="text-sm text-stone-300">Teléfonos: <a href="tel:+56942028429" className="hover:text-amber-400">+56 942028429 (Eva)</a> / <a href="tel:+56938853446" className="hover:text-amber-400">+56 938853446 (Kika)</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/refugioelgalpon7/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.093 0-5.55.018-7.5.108-1.95.09-3.328.46-4.512 1.644C-.93 5.037-.556 6.416-.466 8.365c-.09 1.95-.108 3.407-.108 7.5s.018 5.55.108 7.5c.09 1.95.46 3.328 1.644 4.512 1.184 1.184 2.562 1.554 4.512 1.644 1.95.09 3.407.108 7.5.108s5.55-.018 7.5-.108c1.95-.09 3.328-.46 4.512-1.644 1.184-1.184 1.554-2.562 1.644-4.512.09-1.95.108-3.407.108-7.5s-.018-5.55-.108-7.5c-.09-1.95-.46-3.328-1.644-4.512C20.19.46 18.812.09 16.862.002 14.912 0 13.455 0 12.315 2zM12 7.15c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6.3-8.85c-.742 0-1.35.608-1.35 1.35s.608 1.35 1.35 1.35 1.35-.608 1.35-1.35-.608-1.35-1.35-1.35z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.facebook.com/people/Hospedaje-refugio-el-galp%C3%B3n-Hornopir%C3%A9n/100064763255996/#" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://wa.me/56942028429" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-800 pt-8 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} HornoRefugio el Galpón Hornopiren. Hecho con amor.😉</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
