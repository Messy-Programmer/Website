import type { GatsbyConfig } from "gatsby";
import { describe } from "node:test";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MessyProgrammer`,
    describe: `Where Inovation Meets Your Business`,
    siteUrl: `https://www.messyprogrammer.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
