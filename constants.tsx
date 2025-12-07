import React from 'react';
import { NavLink, CommonSpace } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Inicio' },
  { path: '/refugio', label: 'Nuestro Espíritu' },
  { path: '/alojamiento', label: 'Alojamiento' },
  { path: '/arte', label: 'Arte y Experiencias' },
  { path: '/voluntariado', label: 'Voluntariado' },
  { path: '/contacto', label: 'Contacto' },
];

// EJEMPLO: Las imágenes ahora apuntan a una carpeta local.
// Deberías crear una carpeta `/assets/images/` y colocar tus imágenes ahí.
export const CAROUSEL_IMAGES: string[] = [
  '/assets/images/20250216_143349.jpg', // Foto de gente alrededor de una fogata
  '/assets/images/20250216_151937.jpg', // Foto de la construcción rústica
  '/assets/images/20250216_195723.jpg', // Foto de mochileros/aventura
  '/assets/images/20250216_203957.jpg', // Foto de un detalle de arte/artesanía
  '/assets/images/20250221_102321.jpg', // Foto de un paisaje de montaña
];

export const MURAL_IMAGES: string[] = [
  '/assets/images/20250309_155606.jpg',
  //'/assets/images/20250803_154722.jpg',
  '/assets/images/20250807_171458.jpg',
  '/assets/images/20250807_171612.jpg',
  '/assets/images/20250807_171545.jpg',
  '/assets/images/20250807_171600.jpg',
  //'/assets/images/20250807_171813.jpg',
  '/assets/images/20250807_172819.jpg'
];

export const KitchenIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-7.071 17.071A10 10 0 1019.07 4.929" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
);


export const ShowerIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5,6.5V3a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V6.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12,14a3,3,0,0,1,3,3v2a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V17a3,3,0,0,1,3-3h0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10,9.5a2,2,0,0,1,2-2,2,2,0,0,1,2,2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5,12.5V22" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5,12.5V22" />
    </svg>
);

export const BbqIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 19.5V12a6 6 0 00-6-6s-6 2.686-6 6v7.5m12 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12a7 7 0 11-14 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 5L12 3l2 2" />
    </svg>
);

export const LibraryIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v5a2 2 0 002 2h4a2 2 0 002-2v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5h8v2" />
    </svg>
);

export const HammockIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0 1.657 3.134 3 7 3s7-1.343 7-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8c0 1.657 3.134 3 7 3s7-1.343 7-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12V8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 12V8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v- hükümetinin 4c-3.866 0-7-3.134-7-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8c-3.866 0-7 3.134-7 7" />
    </svg>
);

export const COMMON_SPACES: CommonSpace[] = [
    { name: 'Cocina Equipada', description: 'Un espacio amplio y común para cocinar, compartir y conocer a otros viajeros.', icon: <KitchenIcon className="w-10 h-10 text-amber-600"/> },
    { name: 'Duchas con Agua Caliente', description: 'Esenciales para reponer energías después de un día de aventura.', icon: <ShowerIcon className="w-10 h-10 text-amber-600"/> },
    { name: 'Sector para Asados', description: 'Ideal para disfrutar de una parrillada al aire libre con nuevos amigos.', icon: <BbqIcon className="w-10 h-10 text-amber-600"/> },
    { name: 'Biblioteca', description: 'Un rincón tranquilo para leer un libro y relajarse.', icon: <LibraryIcon className="w-10 h-10 text-amber-600"/> },
    { name: 'La Malla Gigante', description: 'Nuestra atracción principal: una hamaca gigante para descansar y divertirse.', icon: <HammockIcon className="w-10 h-10 text-amber-600"/> },
];
