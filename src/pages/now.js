import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


import Layout from "../components/layout"

const Now = () => {
    const data = useStaticQuery(graphql`
        query nowQuery {
            allContentfulNow {
                nodes {
                    id
                    content {
                        json
                    }
                }
            }
        }
    `)

    const { title, content } = data.allContentfulNow.nodes[0];

    return (
        <Layout>
            {/* <SEO title="Now" keywords={[`gatsby`, `about`, `react`]} /> */}
            <div className="now">
                <p>{title}</p>
                <div>{documentToHtmlString(content.json)}</div>
            </div>
        </Layout>
    );
}

export default Now
