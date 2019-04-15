import React from 'react'
import { connect } from 'react-redux'

class QuestionValidation extends React.Component {
  render() {
    if (this.props.checkResponses && !this.props.is_valid) {
      return (
        <div className="alert alert-warning mt-4">
          <p>Respuestas Correstas:</p>
          {this.htmlCorrectResponses()}
        </div>
      )
    }

    return null
  }

  htmlCorrectResponses() {
    return this.props.responsesValidated.map((element, index) => {
      if (!element) {
        return (
          <div key={index}>
            <span className="badge badge-primary">{index+1}</span>
            <span className="badge badge-secondary ml-1">{this.props.validation[index]}</span>
          </div>
        )
      }

      return null
    })
  }
}

function mapStateToProps(state, props) {
  let question = state.questions.find(element => {
    return element.reference === props.reference
  })

  return {
    checkResponses: state.checkResponses,
    is_valid: question.data.is_valid,
    responsesValidated: question.data.responses_validated,
    validation: question.data.validation.valid_response.value
  }
}

export default connect(mapStateToProps)(QuestionValidation)
