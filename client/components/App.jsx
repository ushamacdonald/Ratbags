import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Rats from './Rats'


const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route exact path="/" component={Rats} />

    </div>
  </Router>
)

export default App
