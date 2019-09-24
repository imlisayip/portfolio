import React from 'react'
import PropType from 'prop-types'
import AboutConcise from '../components/AboutConcise'
import CaseStudy from '../components/CaseStudy'
import Archives from '../components/Archives'


export default class Work extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="home">
                    <AboutConcise />
                </div>
                <div className="showcase">
                    <div className="block">
                        <CaseStudy />
                    </div>
                    <div className="block">
                        <Archives />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Work.propType = {
}
