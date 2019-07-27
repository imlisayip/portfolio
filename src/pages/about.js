import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const About = ({ data }) => {
    console.log(data.AboutPageQuery)
    // const { title, image, content, condense } = data.AboutPageQuery;
    return (
        <Layout>
            {/* <SEO title="About" keywords={[`gatsby`, `about`, `react`]} /> */}
            <div className="about">
                {/* {title}
                {image}
                {content}
                {condense} */}
            </div>
        </Layout>
    );
}

export default About

export const query = graphql`
    query AboutPageQuery {
        contentfulAbout {
            title
            image {
                file {
                    url
                }
            }
            condense {
                condense
            }
            content {
                content
            }
        }
    }
`