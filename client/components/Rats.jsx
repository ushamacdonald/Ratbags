import React from 'react'
import {connect} from 'react-redux'


const Rats = ({rats, auth}) => {
  return (
    <div>
      {auth.isAuthenticated &&
      <div>
        <h1>Meet the Rats</h1>
        {rats.map((rat, i) => {
          return <div key={i}>{rat.name}</div>
        })}
      </div>
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {auth: state.auth, rats: state.rats}
}

export default connect(mapStateToProps)(Rats)
