import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import { MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import CaseStudyExpanded from '../pages/aio';

export default class Project extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            caseStudy: false
        }
    }
    render() {
        const { caseStudy } = this.state
        const { projects, block, orientation, site } = this.props

        const options = {
            renderMark: {
                [MARKS.UNDERLINE]: text => `<span>${text}</span>`
            },
        }

        // TODO: on true, switch to new page, not swap out
        if (caseStudy === true) {
            return <CaseStudyExpanded />
        }

        return (
            <>
                <h1>{block}</h1>
                {
                    projects.map(({ node: project }, index) => (
                        <div key={index} className="project">
                            <div className={orientation === 'reverse' && index % 2 === 0 ? 'info reverse' : 'info'} >
                                {/* TODO: add link to this? */}
                                <img
                                    alt={Array.isArray(project.image) ? project.image[0].description : project.image.description}
                                    src={Array.isArray(project.image) ? project.image[0].file.url : project.image.file.url}
                                />
                                <div className="text">
                                    <h2>
                                        {/* <span> */}
                                        {/* <a className="title" href={project.link}></a> */}
                                        {/* </span> */}
                                        {project.title}
                                    </h2>
                                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(project.blurb.json, options) }} />
                                    <p>Role: {project.role}</p>

                                    {site
                                        ? <a href={project.link}>
                                            <button className='button--project'>
                                                Visit site
                                            </button>
                                        </a>
                                        : <Link to='/aio'>
                                            <button className='button--project'>View {block}</button>
                                        </Link>

                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

Project.propTypes = {
    projects: PropTypes.array.isRequired,
    block: PropTypes.string.isRequired,
    orientation: PropTypes.string,
    site: PropTypes.bool
}
