import React from 'react'
import ReactDOM from 'react-dom'
import PossibleResponse from './PossibleResponse'
import { connect } from 'react-redux';

class ClozeDropdown extends React.Component {
  constructor(props) {
    super(props)

    const template = this.formatTemplate(
      props.data.template,
      props.data.possible_responses,
      props.reference
    )

    this.state = { template }
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createStimulus()} />
        <div dangerouslySetInnerHTML={this.createTemplate()} />
      </div>
    )
  }

  componentDidMount() {
    this.insertPossibleResponses(
      this.props.data.possible_responses,
      this.props.reference
    )
  }

  createStimulus() {
    return { __html: this.props.data.stimulus }
  }

  createTemplate() {
    return { __html: this.state.template }
  }

  formatTemplate(template, possibleResponses, reference) {
    for (let index = 0; index < possibleResponses.length; index++) {
      template = template.replace(
        '{{response}}',
        `<span id="${reference}-${index}"></span>`
      )
    }

    return template
  }

  insertPossibleResponses(possibleResponses, reference) {
    possibleResponses.forEach((element, index) => {
      ReactDOM.render(
        <PossibleResponse data={element} reference={reference} index={index} />,
        document.querySelector(`#${reference}-${index}`)
      )
    })
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.questions
  }
}

export default  connect(mapStateToProps)(ClozeDropdown)
