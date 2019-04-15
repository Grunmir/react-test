import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

class ResponsesCheck extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
  }

  handleClick(event) {
    this.props.actions.checkResponses(!this.props.checkResponses)
    this.props.actions.validateResponses()
  }

  handleClickReset(event) {
    this.props.actions.checkResponses(!this.props.checkResponses)
    this.props.actions.validQuestionsReset()
    this.props.actions.responsesReset()
  }

  render() {
    let button = !this.props.checkResponses
      ? <button type="button" className="btn btn-primary" onClick={this.handleClick}>Comprobar respuestas</button>
      : <button type="button" className="btn btn-primary" onClick={this.handleClickReset}>Reiniciar</button>

    return (
      <div className="d-flex justify-content-between mb-5">
        <div>
          {this.props.validQuestions}
        </div>

        <div>
          {button}
        </div>
      </div>
    )
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
