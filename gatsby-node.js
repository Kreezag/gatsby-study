const path = require(`path`)

exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)
  
  const appPostsTemplate = path.resolve("./src/templates/allPosts.js")

  const postPerPage = 3

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

  new Array(numPages).forEach((_, index) => {
    actions.createPages({
      path: index === 0 ? "/" : `/${index + 1}`,
      component: appPostsTemplate,
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  // Create single post

  // data.allMdx.edges.forEach(edge => {
  //   const slug = edge.node.frontmatter.slug
  //   const id = edge.node.id
  //
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve("./src/templates/singlePost.js"),
  //     context: { id },
  //   })
  // })
}
