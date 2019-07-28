import React from "react"
import { graphql } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const About = ({ data }) => {
    const { image, content } = data.allContentfulAbout.edges[0].node;

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

export const query = graphql`
    query AboutQuery {
        allContentfulAbout (limit:1) {
            edges {
                node {
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
    }
`