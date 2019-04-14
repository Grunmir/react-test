import { ADD_QUESTIONS, ADD_RESPONSE } from '../actions-types/index'


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
