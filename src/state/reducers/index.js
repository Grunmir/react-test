import { ADD_RESPONSE } from '../actions-types/index'

function data(state, action) {
  switch (action.type) {
    case ADD_RESPONSE: {
      let question = state.questions.find(element => {
        return element.reference === action.payload.reference
      })

      if (!question) {
        state.questions.push({
          reference: action.payload.reference,
          responses: [
            { index: action.payload.index, response: action.payload.response }
          ]
        })
      } else {
      }

      console.dir(question)

      return { ...state }
    }

    default:
      return state
  }
}

export default data
