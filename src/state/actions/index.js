import { ADD_RESPONSE } from '../actions-types/index'

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
