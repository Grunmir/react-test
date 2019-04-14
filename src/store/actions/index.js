import { ADD_QUESTIONS, ADD_RESPONSE, CHECK_RESPONSES } from '../actions-types/index'


export function addQuestions(questions) {
  return {
    type: ADD_QUESTIONS,
    payload: {
      questions
    }
  }
}

export function addResponse(response, reference, index) {
  return {
    type: ADD_RESPONSE,
    payload: {
      reference,
      index,
      response
    }
  }
}

export function checkResponses(value) {
  return {
    type: CHECK_RESPONSES,
    payload: {
      value
    }
  }
}
