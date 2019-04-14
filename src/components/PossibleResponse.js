import * as actions from '../store/actions/index'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PossibleResponse extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selected: '' }
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
}

function mapStateToProps(state, props) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PossibleResponse)
