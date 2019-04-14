import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

class ResponsesCheck extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.actions.checkResponses(!this.props.checkResponses)
  }

  render() {
    let text = !this.props.checkResponses
      ? 'Comprobar respuestas'
      : 'Reiniciar'

    return (
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>{text}</button>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    questions: state.questions,
    checkResponses: state.checkResponses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesCheck)
