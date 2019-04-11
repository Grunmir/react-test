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
          return (
            <div key={question.reference}>
              <ClozeDropdown data={question.data} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Questions;
