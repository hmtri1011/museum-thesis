import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/nav'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import './index.css'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore(window.__INITIAL_STATE__)

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
