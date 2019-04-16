import {
  ADD_QUESTIONS, ADD_RESPONSE, CHECK_RESPONSES, RESPONSES_RESET,
  VALID_QUESTION_RESET, VALIDATE_RESPONSES } from '../actions-types/index'

function data(state, action) {
  switch (action.type) {
    case ADD_QUESTIONS: {
      state.questions = action.payload.questions
      state = initQuestions(state)

      return { ...state }
    }

    case ADD_RESPONSE: {
      state.questions.map(question => {
        if (question.reference === action.payload.reference) {
          question.data.responses[action.payload.index] = action.payload.response
        }

        return question
      })

      return { ...state }
    }

    case CHECK_RESPONSES: {
      state.checkResponses = action.payload.value

      return { ...state }
    }

    case RESPONSES_RESET: {
      state = initQuestions(state)

      return { ...state }
    }

    case VALID_QUESTION_RESET: {
      state.validQuestions = 0

      return { ...state }
    }

    case VALIDATE_RESPONSES: {
      state.questions.map(question => {
        question.data.validation.valid_response.value.forEach((element, index) => {
          question.data.responses_validated[index] = element === question.data.responses[index]
        })

        if (isValid(question.data.responses_validated)) {
          question.data.is_valid = true
          state.validQuestions++
        }

        return question
      })

      return { ...state }
    }

    default:
      return state
  }
}

function isValid(responses_validated) {
  let valid = responses_validated.find(element => {
    return element === false
  })

  return valid === undefined ? true : false
}

function initQuestions(state) {
  state.questions.map(question => {
    question.data.responses = []
    question.data.responses_validated = []
    question.data.is_valid = false

    return question
  })

  return state
}

export default data
