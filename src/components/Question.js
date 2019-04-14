import React from 'react'
import QuestionClozeDropdown from './QuestionClozeDropdown'

class Question extends React.Component {
  render() {
    if (this.props.question.type === 'clozedropdown') {
      return (
        <QuestionClozeDropdown reference={this.props.question.reference} />
      )
    }

    return undefined
  }
}

export default Question
