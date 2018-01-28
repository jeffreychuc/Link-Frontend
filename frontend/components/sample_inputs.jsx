import React from 'react';

export default class SampleInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sample-inputs" id="sample-inputs">
        <h2 className="sample-header">What do you need?</h2>
        <div className="sample-inputs-container">
          <div className="sample-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <div>
              <span className="gradient-border"></span>
              I'm looking for a clinic. I'm on the corner of Eddy and Larkin.
            </div>
          </div>
          <div className="sample-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              I need shelter. My current address is 587 Eddy St.
            </div>
          </div>
          <div className="sample-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              Where can I find a meal? I can go anywhere in San Francisco.
            </div>
          </div>

          <div className="sample-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              I need a place to stay for the night. I'm in the 94016.
            </div>
          </div>
          <div className="sample-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              I'm trying to find some grub around 825 Broadway in SF.
            </div>
          </div>
          <div className="sample-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              Are there any open clinics nearby? I'm in SF.
            </div>
          </div>
        

        </div>
      </div>
    );
  }
}
