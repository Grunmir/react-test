import React from "react";

class PossibleResponse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);

    console.dir(props.reference + '      ' + props.index);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    console.dir(event.target.value);
  }

  render() {
    // return <span>PREGUNTA {this.props.id}</span>;
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        {this.props.data.map((response, index) => {
          return (
            <option value={response} key={index}>
              {response}
            </option>
          );
        })}
      </select>
    );
  }
}

export default PossibleResponse;
