import React from "react"
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../pages/Work"
import About from "../pages/About"
// import "./index.css"

function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>Work</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/about'>About</NavLink>
            </li>
            <li>
                Contact
          {/* <NavLink activeClassName='active' to='/popular'>Popular</NavLink> */}
            </li>
        </ul>
    )
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />

                    <Switch>
                        <Route exact path='/' component={Work} />
                        <Route exact path='/About' component={About} />
                        {/* <Route path='/contact' component={Contact} /> */}
                        <Route render={() => <p>Not Found</p>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App

