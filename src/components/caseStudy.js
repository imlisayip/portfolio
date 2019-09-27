import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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
                    }
                }
            }
        }
    `)
    const infos = data.allContentfulCaseStudy.edges



    return (
        <>
            <Project blurbs={infos} block="Case Study" />
                {projectOverview.json.content.map((data, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: documentToHtmlString(data, options) }} />
                ))}
            </div>
            <div className='casestudy-content'>
                {content.json.content.map((data, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: documentToHtmlString(data, options) }} />
                ))}
        </>
    )
}

export default CaseStudy