import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Resume = () => {
    const data = useStaticQuery(graphql` 
        query test {
            allContentfulAsset {
                edges {
                    node {
                        title
                            file {
                                url
                        }
                    }
                }
            }
        }
    `)

    const nodes = data.allContentfulAsset.edges.filter(node => {
        let title = node.node.title
        if (title === 'Lisa Yip Resume') {
            return node.node.file.url

        }
    })
    const resume = nodes[0].node.file.url

    return (
        <Layout>
            <SEO title='Resume' keywords={[`gatsby`, `resume`, `react`]} />
            <embed src={resume} height="1100px" width="800" />
        </Layout>
    )
}

export default Resume
