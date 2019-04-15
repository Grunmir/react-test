import * as actions from '../store/actions/index'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ResponsePossibleSelect extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
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
      <select value={this.props.selected} onChange={this.handleChange}>
        <option value="" />
        {this.props.responses.map((response, index) => {
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
    let index = this.props.index

    let className =
      this.props.question.responses &&
      this.props.question.responses[index] ===
        this.props.question.validation.valid_response.value[index]
        ? 'badge badge-success ml-1'
        : 'badge badge-danger ml-1'

    return (
      <span>
        <span className="badge badge-primary">{index+1}</span>
        <span className={className}>{this.props.selected}</span>
      </span>
    )
  }
}

function mapStateToProps(state, props) {
  let question = state.questions.find(element => {
    return element.reference === props.reference
  })

  let selected = question.data.responses[props.index]

  return {
    selected: selected ? selected : '',
    question: question.data,
    checkResponses: state.checkResponses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsePossibleSelect)
