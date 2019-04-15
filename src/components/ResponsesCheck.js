import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'
import './ResponsesCheck.css'

class ResponsesCheck extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickCheck = this.handleClickCheck.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
  }

  handleClickCheck(event) {
    this.props.actions.checkResponses(!this.props.checkResponses)
    this.props.actions.validateResponses()
  }

  handleClickReset(event) {
    this.props.actions.checkResponses(!this.props.checkResponses)
    this.props.actions.validQuestionsReset()
    this.props.actions.responsesReset()
  }

  render() {
    return (
      <div className="d-flex justify-content-between mb-5">
        <div>
          {this.getResult()}
        </div>

        <div>
          {this.getButton()}
        </div>
      </div>
    )
  }

  getButton() {
    let text = 'Comprobar respuestas'
    let handleClick = this.handleClickCheck

    if (this.props.checkResponses) {
      text = 'Reiniciar'
      handleClick = this.handleClickReset
    }

    return <button type="button" className="btn btn-primary" onClick={handleClick}>{text}</button>
  }

  getResult() {
    let classEvent = this.props.validQuestions
      ? this.props.validQuestions === this.props.questions.length
        ? 'success'
        : 'warning'
      : 'danger'

    if (this.props.checkResponses) {
      return (
        <div className="d-flex align-items-center">
          <div>
            <span className={`circle bg-${classEvent}`}>
              {this.props.validQuestions}/{this.props.questions.length}
            </span>
          </div>

          <strong className={`h4 ml-2 text-${classEvent}`}>Correctas</strong>
        </div>
      )
    }

    return null
  }
}

function mapStateToProps(state, props) {
  return {
    checkResponses: state.checkResponses,
    questions: state.questions,
    validQuestions: state.validQuestions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesCheck)
