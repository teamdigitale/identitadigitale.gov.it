module.exports = {
  siteMetadata: {
    name: "Identità Digitale",
    hostname: "identitadigitale.gov.it",
    siteUrl: "https://identitadigitale.gov.it/",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-jss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-attr",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "zm6pM8j3nV",
        matomoUrl: `https://ingestion.webanalytics.italia.it/`,
        siteUrl: "https://identitadigitale.gov.it",
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
        localScript: "/assets/matomo.js",
        enableJSErrorTracking: true,
      },
    },
  ],
};
