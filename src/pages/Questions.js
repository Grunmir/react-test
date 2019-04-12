import React from "react";
import ClozeDropdownQuestion from "../components/ClozeDropdownQuestion";
import API from "../api/api.json";

import "./Questions.css";

class Questions extends React.Component {
  state = { ...API };

  render() {
    return (
      <div>
        {this.state.questions.map(question => {
          if (question.type === "clozedropdown") {
            return (
              <ClozeDropdownQuestion
                data={question.data}
                reference={question.reference}
                key={question.reference}
              />
            );
          }

          return undefined;
        })}
      </div>
    );
  }
}

export default Questions;
