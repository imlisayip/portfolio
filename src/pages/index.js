import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "./index.css"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query AboutConciseQuery {
            allContentfulAboutConcise  {
                nodes {
                    id
                    title
                    body {
                        json
                    }
                }
            }
        }
    `)

    const { title, body } = data.allContentfulAboutConcise.nodes[0];

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div className="home">
                <div key={title} dangerouslySetInnerHTML={{ __html: documentToHtmlString(body.json.content[0]) }} />

            </div>
            <div className="caseStudy">
                cast study
            </div>
            <div className="archive">
                archive
            </div>
            {/* <Link to="/blogposts/">View all posts</Link> */}
        </Layout >
    )
}

export default IndexPage
