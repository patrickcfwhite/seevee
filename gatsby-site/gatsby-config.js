module.exports = {
  siteMetadata: {
    description: "Flexible CV gatsby theme",
    title: "seevee",
    author: "Patrick & Jedd",
    jobs: [
      {
        company: "Acme Company",
        location: "Spain",
        datesHeld: "1988",
        position: "Coyote",
        description: "..wild animal",
        skills: ["eating", "pooping"],
      },
    ],
    myName: "Jedd Fenner",
    email: "jed@diff.uk",
    github: "https://github.com/jeddf",
    bioLineOne: "Hello! ❤️ I am a software engineer, mostly web.",
    bioLineTwo:
      "Taught a coding bootcamp recently, studied civil engineering not recently.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
