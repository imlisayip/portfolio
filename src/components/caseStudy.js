import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Project from './Project'

const CaseStudy = () => {
    const data = useStaticQuery(graphql`
        query CaseStudyQuery {
            allContentfulCaseStudy  {
                edges {
                    node {
                        id
                        title
                        image {
                            file {
                                url
                            }
                            description
                        }
                        blurb {
                            json
                        }
                        role
                    }
                }
            }
        }
    `)

    const infos = data.allContentfulCaseStudy.edges

    return (<Project projects={infos} block="Case Study" />)
}

export default CaseStudy