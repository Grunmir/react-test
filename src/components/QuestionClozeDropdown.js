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

  checkResponses() {
    let responses = this.props.question.responses
    let validation = this.props.question.validation.valid_response.value

    return JSON.stringify(responses) === JSON.stringify(validation)
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
      className = this.checkResponses()
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
            responses={element}
            reference={reference}
            index={index}
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
    question: question.data,
    checkResponses: state.checkResponses
  }
}

export default connect(mapStateToProps)(QuestionClozeDropdown)
