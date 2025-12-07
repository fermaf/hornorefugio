
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-stone-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">HornoRefugio el Galpón Hornopién</h3>
            <p className="text-sm text-stone-300">Tu hogar en la Carretera Austral.</p>
            <p className="text-sm text-stone-300">Hornopirén, Región de Los Lagos, Chile.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contacto</h3>
            <p className="text-sm text-stone-300">Email: <a href="mailto:contacto@hornorefugio.cl" className="hover:text-amber-400">contacto@hornorefugio.cl</a></p>
            <p className="text-sm text-stone-300">Teléfono: <a href="tel:+56912345678" className="hover:text-amber-400">+56 942028429</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-400">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.093 0-5.55.018-7.5.108-1.95.09-3.328.46-4.512 1.644C-.93 5.037-.556 6.416-.466 8.365c-.09 1.95-.108 3.407-.108 7.5s.018 5.55.108 7.5c.09 1.95.46 3.328 1.644 4.512 1.184 1.184 2.562 1.554 4.512 1.644 1.95.09 3.407.108 7.5.108s5.55-.018 7.5-.108c1.95-.09 3.328-.46 4.512-1.644 1.184-1.184 1.554-2.562 1.644-4.512.09-1.95.108-3.407.108-7.5s-.018-5.55-.108-7.5c-.09-1.95-.46-3.328-1.644-4.512C20.19.46 18.812.09 16.862.002 14.912 0 13.455 0 12.315 2zM12 7.15c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6.3-8.85c-.742 0-1.35.608-1.35 1.35s.608 1.35 1.35 1.35 1.35-.608 1.35-1.35-.608-1.35-1.35-1.35z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-400">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
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
