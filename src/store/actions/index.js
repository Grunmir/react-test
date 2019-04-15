import { ADD_QUESTIONS, ADD_RESPONSE, CHECK_RESPONSES, RESPONSES_RESET, VALID_QUESTION_RESET, VALIDATE_RESPONSES } from '../actions-types/index'


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

export function validateResponses() {
  return {
    type: VALIDATE_RESPONSES,
    payload: {}
  }
}

export function validQuestionsReset() {
  return {
    type: VALID_QUESTION_RESET,
    payload: {}
  }
}

export function responsesReset() {
  return {
    type: RESPONSES_RESET,
    payload: {}
  }
}
