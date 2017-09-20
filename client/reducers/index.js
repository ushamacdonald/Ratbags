import {combineReducers} from 'redux'

import auth from './auth'
import rats from './rats'

export default combineReducers({
  auth,
  rats
})
