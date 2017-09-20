import React from 'react'
import {connect} from 'react-redux'


const Rats = ({rats}) => {
  return (
    <div>
      <h1>Meet the Rats</h1>
      <div>
        {rats.map((rat, i) => {
          return <div key={i}>{rat.name}</div>
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {rats: state.rats}
}

export default connect(mapStateToProps)(Rats)
