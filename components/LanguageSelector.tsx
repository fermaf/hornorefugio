import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChileFlag, USFlag } from './icons/Flags';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center bg-emerald-800/50 rounded-full p-1 border border-emerald-700/50">
            <button
                onClick={() => changeLanguage('es')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${i18n.language.startsWith('es')
                    ? 'bg-amber-500 text-white shadow-md transform scale-105'
                    : 'text-stone-300 hover:text-white hover:bg-emerald-700/50'
                    }`}
                aria-label="Cambiar a Español"
            >
                <ChileFlag className="w-4 h-4 rounded-sm object-cover" />
                <span>ES</span>
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${i18n.language.startsWith('en')
                    ? 'bg-amber-500 text-white shadow-md transform scale-105'
                    : 'text-stone-300 hover:text-white hover:bg-emerald-700/50'
                    }`}
                aria-label="Switch to English"
            >
                <USFlag className="w-4 h-4 rounded-sm object-cover" />
                <span>EN</span>
            </button>
        </div>
    );
};

export default LanguageSelector;
