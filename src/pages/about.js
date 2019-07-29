import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const About = () => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            allContentfulAbout {
                nodes {
                    id
                    image {
                        title
                        file {
                            url
                        }
                    }
                    content {
                        json
                    }
                }
            }
        }
    `)

    const { image, content } = data.allContentfulAbout.nodes[0];

    return (
        <Layout>
            {/* <SEO title="About" keywords={[`gatsby`, `about`, `react`]} /> */}
            <div className="about">
                <img alt={image.title} src={image.file.url} />
                {image.title}
                <div>{documentToHtmlString(content.json)}</div>
            </div>
        </Layout>
    );
}

export default About
