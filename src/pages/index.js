import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../layout/default'
import {
  postsListCss,
  postListItemCss,
  postTeaserCss,
  postTeaserTitleCss,
  postTeaserDescriptionCss,
  postTeaserLinkCss,
} from './index.module.css'

export default function Home({ data }) {
  return (
    <Layout>
      <ul className={postsListCss}>
        {data.allMarkdownRemark.nodes.map((node) => {
          return (
            <li className={postListItemCss}>
              <div className={postTeaserCss}>
                <h2 className={postTeaserTitleCss}>
                  {node.frontmatter.title} (
                  <Link
                    to={`/blog/${node.slug}/`}
                    className={postTeaserLinkCss}
                  >
                    SSG
                  </Link>
                  ) (
                  <Link
                    to={`/dsr-blog/${node.slug}/`}
                    className={postTeaserLinkCss}
                  >
                    DSR
                  </Link>
                  )
                </h2>
                <p className={postTeaserDescriptionCss}>
                  <Link
                    to={`/blog/${node.slug}/`}
                    className={postTeaserLinkCss}
                  >
                    {node.frontmatter.description}
                  </Link>
                </p>
              </div>
            </li>
          )
        })}

        <li className={postListItemCss}>
          <div className={postTeaserCss}>
            <h2 className={postTeaserTitleCss}>
              <Link to={`/products/`} className={postTeaserLinkCss}>
                Products (SSR)
              </Link>
            </h2>
          </div>
        </li>

        <li className={postListItemCss}>
          <div className={postTeaserCss}>
            <h2 className={postTeaserTitleCss}>
              <a href={`/api/hello-world`} className={postTeaserLinkCss}>
                API route
              </a>
            </h2>
          </div>
        </li>
        <li className={postListItemCss}>
          <div className={postTeaserCss}>
            <h2 className={postTeaserTitleCss}>
              <a href={`/___graphql`} className={postTeaserLinkCss}>
                GraphiQL
              </a>
            </h2>
          </div>
        </li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
        slug
      }
    }
  }
`
