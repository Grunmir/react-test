import reducer from './reducers'
import { createStore } from 'redux'

const initialState = {
  checkResponses: false,
  questions: [],
  validQuestions: 0
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
