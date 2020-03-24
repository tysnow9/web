import React from 'react'
import Helmet from 'react-helmet'
import Layout from './layout'

function BlogPostLayout({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter
  return (
    <Layout>
      {children}
    </Layout>
  )


}

export default BlogPostLayout