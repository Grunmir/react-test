import React from 'react';

class ClozeDropdown extends React.Component {
  createStimulus() {
    return {__html: this.props.data.stimulus};
  }

  createTemplate() {
    return {__html: this.props.data.template};
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createStimulus()} />
        <div dangerouslySetInnerHTML={this.createTemplate()} />
      </div>
    );
  }
}

export default ClozeDropdown;
