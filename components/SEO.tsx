import React from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image = "/assets/images/favico.png",
    url = "https://hornorefugio.cl"
}) => {
    const { t } = useTranslation();

    const finalDescription = description || t('seo.defaultDescription');
    const finalKeywords = keywords || t('seo.defaultKeywords');

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={finalDescription} />
            <meta property="twitter:image" content={image} />
        </>
    );
};

export default SEO;
