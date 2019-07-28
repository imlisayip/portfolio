import React from "react"
import { Link, graphql } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "./index.css"

const IndexPage = ({ data }) => {
    const { title, body } = data.allContentfulAboutConcise.edges[0].node;

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div className="home">
                <div key={title}>{documentToHtmlString(body.json.content[0])}</div>
            </div>
            {/* <Link to="/blogposts/">View all posts</Link> */}
        </Layout >
    )
}

export default IndexPage

export const query = graphql`
    query AboutConciseQuery {
        allContentfulAboutConcise  {
            edges {
                node {
                    id
                    title
                    body {
                        json
                    }
                }
            }
        }
    }
`