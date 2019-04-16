import React from 'react'
import ReactDOM from 'react-dom'
import ResponsePossibleSelect from './ResponsePossibleSelect'
import QuestionValidation from './QuestionValidation'
import store from '../store'
import { Provider, connect } from 'react-redux'

class QuestionClozeDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.props.question.template = this.formatTemplate(
      props.question.template,
      props.question.possible_responses,
      props.reference
    )
  }

  componentDidMount() {
    this.insertPossibleResponses(
      this.props.question.possible_responses,
      this.props.reference
    )
  }

  render() {
    return (
      <div className={this.getClassName()} role="alert">
        <div dangerouslySetInnerHTML={this.createStimulus()} />
        <div dangerouslySetInnerHTML={this.createTemplate()} />
        <QuestionValidation reference={this.props.reference} />
      </div>
    )
  }

  createStimulus() {
    return { __html: this.props.question.stimulus }
  }

  createTemplate() {
    return { __html: this.props.question.template }
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

  getClassName() {
    let className = 'alert alert-light'

    if (this.props.checkResponses) {
      className = this.props.is_valid
        ? 'alert alert-success'
        : 'alert alert-danger'
    }

    return className
  }

  insertPossibleResponses(possibleResponses, reference) {
    possibleResponses.forEach((element, index) => {
      ReactDOM.render(
        <Provider store={store}>
          <ResponsePossibleSelect
            index={index}
            reference={reference}
            responses={element}
          />
        </Provider>,
        document.querySelector(`#${reference}-${index}`)
      )
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
    question: question.data
  }
}

export default connect(mapStateToProps)(QuestionClozeDropdown)
