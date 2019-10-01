import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS } from '@contentful/rich-text-types';

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
        <>
            {/* <SEO title='About' keywords={[`gatsby`, `about`, `react`]} /> */}
            <div className='about'>
                <img alt={image.title} src={image.file.url} />
                <p className='image-caption'>{image.title}</p>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json, options) }} />
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(contact.json, options) }} />
            </div>
        </>
    );
}

export default About
