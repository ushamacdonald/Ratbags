import React from 'react'
import {connect} from 'react-redux'

import {getRats} from '../actions/rats'

const Rats = () => {
  return (
    <div>
      <h1>Meet the Rats</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {rats: state.rats}
}

export default connect(mapStateToProps)(Rats)
