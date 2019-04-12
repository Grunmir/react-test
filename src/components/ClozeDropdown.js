import React from 'react';
import ReactDOM from 'react-dom';
import PossibleResponse from './PossibleResponse';

class ClozeDropdown extends React.Component {
  constructor(props) {
    super(props);

    let template = props.data.template;

    props.data.possible_responses.forEach((element, index) => {
      template = template.replace('{{response}}', `<span id="${props.id}-${index}"></span>`);
    });

    this.state = { template: template };
  }

  componentDidMount() {
    // let template = this.props.data.template;

    // this.props.data.possible_responses.forEach((element, index) => {
    //   ReactDOM.render(<PossibleResponse id={index}/>, document.querySelector(`#${this.props.id}-${index}`));
    // });

    // this.setState({template});

    let template = this.state.template;

    this.props.data.possible_responses.forEach((element, index) => {
      ReactDOM.render(<PossibleResponse id={index}/>, document.querySelector(`#${this.props.id}-${index}`));
    });

    this.setState({template});
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createStimulus()} />
        <div dangerouslySetInnerHTML={this.createTemplate()} />
      </div>
    );
  }

  createStimulus() {
    return {__html: this.props.data.stimulus};
  }

  createTemplate() {
    // let template = this.props.data.template;

    // console.dir(this.props)
    // console.dir(this.state.template)

    // this.props.data.possible_responses.forEach((element, index) => {
    //   template = template.replace('{{response}}', `<span id="${this.props.id}-${index}"></span>`);
    // });

    return {__html: this.state.template};
  }
}

export default ClozeDropdown;
