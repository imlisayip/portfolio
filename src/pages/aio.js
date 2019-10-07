import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Layout from '../components/Layout'

const CaseStudyExpanded = () => {
    const data = useStaticQuery(graphql`
        query CaseStudyExpandedQuery {
            allContentfulCaseStudy  {
                edges {
                    node {
                        id
                        title
                        projectOverview {
                            json
                        }
                        content {
                            json
                        }
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


    const options = {
        renderMark: {
            [MARKS.UNDERLINE]: text => `<span>${text}</span>`
        }
    }

    const { title, content, projectOverview, image } = data.allContentfulCaseStudy.edges[0].node;

    return (
        <Layout>
            <h1>{title}</ h1>
            <div className='project-overview'>
                <img
                    alt={image.description}
                    src={image.file.url}
                />
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(projectOverview.json, options) }} />
            </div>
            <div className='project-content'>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json, options) }} />
            </div>
        </Layout>
    )
}

export default CaseStudyExpanded
