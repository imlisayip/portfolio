import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import SEO from '../components/seo'
import Work from '../pages/Work'
import About from '../pages/About'
import Navigation from '../components/navigation'
import '../index.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Navigation siteTitle='Lisa Yip' />
                    <Switch>
                        <Route exact path='/' component={Work} />
                        <Route exact path='/about' component={About} />
                        <Route render={() => <p>Not Found</p>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App

