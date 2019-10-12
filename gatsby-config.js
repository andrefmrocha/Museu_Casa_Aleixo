module.exports = {
    siteMetadata: {
        title: `Museu Casa Aleixo`,
        description: `O Museu Casa Aleixo é um empreendimento de turismo, constituído por edifícios de arquitetura antiga e moderna, onde pode desfrutar de grande variedade de culturas agrícolas, de uma piscina e jardins para o seu lazer.`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images`
            }
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
                display: `minimal-ui`
            }
        }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    ]
};
