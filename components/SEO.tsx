import React from 'react';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Refugio El Galpón en Hornopirén. Alojamiento para mochileros, camping, arte y cultura en la Carretera Austral.",
    keywords = "Hornopirén, Alojamiento, Camping, Refugio, Carretera Austral, Mochileros, Hostal, Arte, Cultura",
    image = "/assets/images/favico.png",
    url = "https://hornorefugio.cl"
}) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </>
    );
};

export default SEO;
