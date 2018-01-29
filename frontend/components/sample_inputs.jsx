import React from 'react';

export default class SampleInputs extends React.Component {
  constructor(props) {
    super(props);
    this.hideFoodShelter = this.hideFoodShelter.bind(this);
    this.hideFoodClinic = this.hideFoodClinic.bind(this);
    this.hideShelterClinic = this.hideShelterClinic.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  hideFoodShelter() {
    this.props.toggleFoodDisplay(true);
    this.props.toggleShelterDisplay(true);
    this.props.toggleClinicDisplay(false);
    this.smoothScroll(1000);
    console.log('hiding food and shelters');
  }

  hideFoodClinic() {
    this.props.toggleFoodDisplay(true);
    this.props.toggleClinicDisplay(true);
    this.props.toggleShelterDisplay(false);
    this.smoothScroll(1000);
    console.log('hiding food and clinics');
  }

  hideShelterClinic() {
    this.props.toggleShelterDisplay(true);
    this.props.toggleClinicDisplay(true);
    this.props.toggleFoodDisplay(false);
    this.smoothScroll(1000);
    console.log('hiding shelters and clinic');
  }

  smoothScroll(h) {
    let i = h || 0;
    if (i < 1950) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i + 30);
      }, 1);
    }
  }

  render() {
    return (
      <div className="sample-inputs" id="sample-inputs">
        <h2 className="sample-header">What do you need?</h2>
        <div className="sample-inputs-container">
          <div className="sample-container" onClick={() => this.hideFoodShelter()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <div>
              <span className="gradient-border"></span>
              I'm looking for a clinic.<br/> I'm at 1885 Mission St. San Francisco
            </div>
          </div>
          <div className="sample-container" onClick={() => this.hideFoodClinic()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              I need shelter. <br/>My current address is 587 Eddy St. San Francisco
            </div>
          </div>
          <div className="sample-container" onClick={() => this.hideShelterClinic()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              Where can I find a meal?<br/> I can go anywhere in San Francisco.
            </div>
          </div>

          <div className="sample-container" onClick={() => this.hideFoodClinic()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              I need a place to stay for the night.<br/> I'm in the 94016.
            </div>
          </div>
          <div className="sample-container" onClick={() => this.hideShelterClinic()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              I'm trying to find some grub <br/> 825 Broadway in SF.
            </div>
          </div>
          <div className="sample-container" onClick={() => this.hideFoodShelter()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <span className="gradient-border"></span>
            <div>
              Are there any open clinics nearby? <br/> I'm in SF.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
