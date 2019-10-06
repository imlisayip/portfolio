import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import SEO from '../components/seo'
import About from './About'
import CaseStudyExpanded from './CaseStudyExpanded'
import Involvement from './Involvement'
// import StyleGuide from './StyleGuide'
import Work from './Work'
import NotFoundPage from './404'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../index.scss'

class App extends React.Component {
    render() {
        // add localization 
        // https://medium.com/@ryandrewjohnson/adding-multi-language-support-to-your-react-redux-app-cf6e64250050
        return (
            <Router>
                <Navigation siteTitle='Lisa Yip' />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Work} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/aio' component={CaseStudyExpanded} />
                        {/* <Route exact path='/style-guide' component={StyleGuide} /> */}
                        <Route exact path='/involvement' component={Involvement} />
                        <Route component={NotFoundPage} />
                        {/* <Route render={() => <p>Not Found</p>} /> */}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App

// ReactDOM.render(
//     // React Element
//     <App />
//     // Where to render to the Element to
//     // document.getElementById('app')
// )
