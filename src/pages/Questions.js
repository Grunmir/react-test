import * as actions from '../store/actions'
import API from '../api/api.json'
import Question from '../components/Question'
import React from 'react'
import ResponsesCheck from '../components/ResponsesCheck'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Questions extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3030/questions`)
      .then(response => {
        console.info(`Preguntas cargadas desde el servidor...`)

        this.props.actions.addQuestions(response.data.questions)
      })
      .catch(error => {
        console.error(error)
        console.info(`Error en el servidor, se procede a cargar la API desde disco:`);

        this.props.actions.addQuestions(API.questions)
      })
  }

  render() {
    return (
      <div className="container">
        {this.props.questions.map(question => {
          return <Question question={question} key={question.reference} />
        })}

        <ResponsesCheck />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    questions: state.questions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
