import { ADD_QUESTIONS, ADD_RESPONSE } from '../actions-types/index'

function data(state, action) {
  switch (action.type) {
    case ADD_QUESTIONS: {
      state.questions = action.payload.questions

      return { ...state }
    }

    case ADD_RESPONSE: {
      state.questions.map(element => {
        if (element.reference === action.payload.reference) {
          if (typeof element.data.responses === 'undefined') {
            element.data.responses = []
          }

          return element.data.responses[action.payload.index] = action.payload.response
        }

        return element
      })

      return { ...state }
    }

    default:
      return state
  }
}

export default data
