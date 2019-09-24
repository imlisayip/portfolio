import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import SEO from '../components/seo'
import Work from '../pages/Work'
import About from '../pages/About'
import Header from '../components/header'
import '../index.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Header siteTitle='Lisa Yip' />
                    <Switch>
                        <Route exact path='/' component={Work} />
                        <Route exact path='/About' component={About} />
                        <Route render={() => <p>Not Found</p>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App

