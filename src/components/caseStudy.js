import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';


const CaseStudy = () => {
    const data = useStaticQuery(graphql`
        query CaseStudyQuery {
            allContentfulCaseStudy  {
                nodes {
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
                    }
                }
            }
        }
    `)
    const options = {
        renderMark: {
            [MARKS.UNDERLINE]: text => `<span>${text}</span>`
        },
        renderNode: {
            [BLOCKS.UL_LIST]: text => `<div className="ULlist">${text}</div>`
        }
    }

    const { title, content, projectOverview } = data.allContentfulCaseStudy.nodes[0];


    return (
        <>
            <div className='header'>
                {title}
            </div>

            <div className="casestudy-overview">
                {projectOverview.json.content.map((data, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: documentToHtmlString(data, options) }} />
                ))}
            </div>
            <div className='casestudy-content'>
                {content.json.content.map((data, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: documentToHtmlString(data, options) }} />
                ))}
            </div>
        </>
    )
}

export default CaseStudy