import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS } from '@contentful/rich-text-types';
import Layout from '../components/Layout'

// import SEO from '../components/seo'

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

    const { image, contact, content } = data.allContentfulAbout.nodes[0];


    return (
        <Layout>
            {/* <SEO title='About' keywords={[`gatsby`, `about`, `react`]} /> */}
            <div className='about'>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json, options) }} />
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(contact.json, options) }} />
                <img
                    alt={image.title}
                    src={image.file.url}
                />
                <p className='image-caption'>{image.title}</p>
                <p>Likes include: sunny warm weather, hammocks, superfoods,
                triathons, reading, volunteering, traveling.</p>

            </div>
        </Layout>
    )
}

export default About
