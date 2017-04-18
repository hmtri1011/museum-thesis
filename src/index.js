import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/nav'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import './index.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Helmet titleTemplate="React App | %s" defaultTitle="React App" />
        <Nav />

        <div className="main-content">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
