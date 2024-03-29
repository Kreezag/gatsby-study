exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
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
  
  const postPerPage = 3

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? "/" : `/${index + 1}`,
      component: require.resolve("./src/templates/all-posts.js"),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  // Create single post

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/single-post.js"),
      context: { id },
    })
  })
}
