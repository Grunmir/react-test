import React from 'react'

class PossibleResponse extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selected: '' }
    this.handleChange = this.handleChange.bind(this)

    console.dir(props.reference + '      ' + props.index)
  }

  handleChange(event) {
    this.setState({ selected: event.target.value })
  }

  render() {
    // return <span>PREGUNTA {this.props.id}</span>;
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

export default PossibleResponse
