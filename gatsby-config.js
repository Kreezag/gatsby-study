module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Test gatsby blog",
    description: "test project for gatsby study",
    url: "https://github.com/Kreezag",
    image: "/office.jpg",
    githubUsername: "Kreezag",
    author: "Kreezag",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `multi\:400,400i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
