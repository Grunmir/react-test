import React from "react";
import ClozeDropdown from "../components/ClozeDropdown";
import API from '../api/api.json';

import './Questions.css'

class Questions extends React.Component {
  state = {...API};

  render() {
    return (
      <div>
        {this.state.questions.map(question => {
          if (question.type === 'clozedropdown') {
            return (
              <ClozeDropdown data={question.data} key={question.reference} id={question.reference} />
            );
          }

          return undefined;
        })}
      </div>
    );
  }
}

export default Questions;
