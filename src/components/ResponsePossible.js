import * as actions from '../store/actions/index'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ResponsePossible extends React.Component {
  state = { selected: '' }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ selected: event.target.value })

    this.props.actions.addResponse(
      event.target.value,
      this.props.reference,
      this.props.index
    )
  }

  render() {
    let select = this.htmlSelect()

    if (this.props.checkResponses) {
      select = this.htmlCheckSelect()
    }

    return select
  }

  htmlSelect() {
    return (
      <select value={this.state.selected} onChange={this.handleChange}>
        <option value="" />
        {this.props.data.map((response, index) => {
          return (
            <option value={response} key={index}>
              {response}
            </option>
          )
        })}
      </select>
    )
  }

  htmlCheckSelect() {
    let check = this.props.questions.find(element => {
      return element.reference === this.props.reference
    })

    if (check.data.responses && check.data.responses[this.props.index] === check.data.validation.valid_response.value[this.props.index]) {
      return <span className="badge badge-success">{this.state.selected}</span>
    }

    return <span className="badge badge-danger">{this.state.selected}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponsePossible)
