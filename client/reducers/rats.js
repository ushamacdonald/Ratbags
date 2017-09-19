function rats (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RATS':
      return [...action.rats]
    default:
      return state
  }
}

export default rats
