import './Questions.css'
import * as actions from '../store/actions'
import API from '../api/api.json'
import ResponsesCheck from '../components/ResponsesCheck'
import Question from '../components/Question'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Questions extends React.Component {
  constructor(props) {
    super(props)

    props.actions.addQuestions(API.questions)
  }

  render() {
    return (
      <div className="container">
        {this.props.questions.map(question => {
          return <Question question={question} key={question.reference} />
        })}

        <ResponsesCheck />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    questions: state.questions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
