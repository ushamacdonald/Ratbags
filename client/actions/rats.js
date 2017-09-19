import request from 'superagent'

export const receiveRats = (rats) => {
  return {
    type: 'RECEIVE_RATS',
    rats
  }
}

export function getRats () {
  return (dispatch) => {
    request
      .get('/api/rats')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveRats(res.body))
      })
  }
}
