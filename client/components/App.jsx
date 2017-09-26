import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getRats} from '../actions/rats'


import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Rats from './Rats'
import About from './About'

class App extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getRats())
  }

  render () {
    return (
      <Router>
        <div className='app-container'>
          <h1>Hello World</h1>
          <Route path="/" component={Nav} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/" component={About} />
          <Route path="/" component={Rats} />

        </div>
      </Router>
    )
  }
}

export default connect()(App)
