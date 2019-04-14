import './Questions.css'
import API from '../api/api.json'
import ClozeDropdownQuestion from '../components/ClozeDropdownQuestion'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

class Questions extends React.Component {
  constructor(props) {
    super(props)

    props.actions.addQuestions(API.questions)
  }

  render() {
    console.dir(this.props)
    return (
      <div>
        {this.props.questions.map(question => {
          if (question.type === 'clozedropdown') {
            return (
              <ClozeDropdownQuestion
                data={question.data}
                reference={question.reference}
                key={question.reference}
              />
            )
          }

          return undefined
        })}
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
