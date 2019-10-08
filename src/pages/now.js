import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS } from '@contentful/rich-text-types';

import Layout from '../components/Layout'

const Now = () => {
    const data = useStaticQuery(graphql`
        query nowQuery {
            allContentfulNow {
                nodes {
                    id
                    content {
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

    const { title, content } = data.allContentfulNow.nodes[0];

    return (
        <Layout>
            {/* <SEO title='Now' keywords={[`gatsby`, `about`, `react`]} /> */}
            <div className='now'>
                <p>{title}</p>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json, options) }} />
            </div>
        </Layout>
    );
}

export default Now
