import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS } from '@contentful/rich-text-types';
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const About = () => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            allContentfulAbout {
                nodes {
                    id
                    image {
                        file {
                            url
                        }
                        title
                    }
                    content {
                        json
                    }
                    contact {
                        json
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

    const { image, content } = data.allContentfulAbout.nodes[0];


    return (
        <Layout>
            <SEO title='About' keywords={[`gatsby`, `about`, `react`]} />

            {/* possible  different desktop + mobile pic  */}
            <img
                alt={image.title}
                src={image.file.url}
            />

            <p className='image-caption'>
                {image.title}
            </p>
            <div className='facts'>
                <p>
                    Likes include: sunny warm weather, hammocks, smoothies,
                    training, book reading, volunteering, and traveling world wide.
                </p>

                <p>
                    Adjectives include: intrepid, responsible, candid, warm, independent, communicative and results-oriented.
                </p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json, options) }} />
        </Layout>
    )
}

export default About
