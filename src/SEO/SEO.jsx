import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph (OG) Meta Tags for Social Media Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://flyawayparking.co.uk/social-preview.jpg"
      />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
