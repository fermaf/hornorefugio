import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const BitcoinBanner: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-stone-900 text-amber-500 py-2 px-4 text-center text-sm font-medium tracking-wide flex justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.24 14.9.358c6.43 1.605 10.341 8.115 8.738 14.548v-.002zm-6.394-3.713c.83-3.594-2.458-5.328-6.658-6.072l1.35-5.408-3.292-.817-1.32 5.295c-.866-.214-1.758-.408-2.636-.6l1.332-5.336-3.296-.82-1.346 5.393c-.716-.164-1.417-.317-2.103-.48l-.006.02-4.54 1.135.85 3.41s2.367-.573 2.346-.535c1.31-.33 1.936.65 2.122 1.385l2.126 8.52c.128.324.21.79-.33 1.066-.036.018-2.348.587-2.348.587l-1.587 3.658 4.287 1.07c.79.196 1.563.394 2.328.575l-1.35 5.41 3.293.82 1.338-5.36c.9.244 1.77.46 2.613.64l-1.336 5.355 3.294.82 1.36-5.445c5.618 1.062 9.853-2.61 5.813-8.05 2.07-.478 3.64-1.84 4.056-4.703zm-3.644 4.88c-.496 1.985-3.84 1.02-4.922.75l.877-3.518c1.082.27 4.455.813 4.045 2.768zm.542-4.87c-.454 1.82-3.297.9-4.212.673l.796-3.19c.916.226 3.775.696 4.23 2.517-.393-.097-.81-.197-1.25-.298z" />
            </svg>
            {/* Using a generic icon above, let's switch to a proper Bitcoin SVG path */}
            <span className="hidden sm:inline">{t('bitcoinBanner.accept')}</span>
            <span>
                <Trans i18nKey="bitcoinBanner.discount" components={{ 1: <strong></strong>, 2: <span className="font-bold text-white"></span> }} />
            </span>
        </div>
    );
};

export default BitcoinBanner;
