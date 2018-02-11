import React from 'react';
import { Button } from 'react-bootstrap';
import Transition from 'react-transition-group/Transition';


export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ui: 1};
    this.smoothScroll = this.smoothScroll.bind(this);
    this.renderPhoneInput = this.renderPhoneInput.bind(this);
    this.handleDisplayStatus = this.handleDisplayStatus.bind(this);
  }

  smoothScroll(h) {
    let i = h || 0;
    if (i < 1000) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i + 30);
      }, 1);
    }
  }

  renderLinkNumber() {
    switch(this.state.ui) {
      case 1:
        return (
          <h3>
            text (510) 999 6129
          </h3>
        );
      case 2:
        return (
          <h3>
            Enter your number below and Link will send you a text:
          </h3>
        );
    }
    return (
      <h3>
        Your text is on its way!
      </h3>
      );
  }

  renderPhoneInput()  {
    switch (this.state.ui)  {
      case 2:
        return (
          <div>
            <input className='phoneNumberInput' type="text" placeholder="415-555-5555"/>
          </div>
        );
    }
    return null;
  }

  handleDisplayStatus() {
    switch (this.state.ui)  {
      case 1:
        this.setState({ui: this.state.ui + 1});
        break;
      case 2:
        // set if valid
        this.setState({ui: this.state.ui + 1});
        break;
      case 3:
        this.smoothScroll(0);
        break;
    }
  }

  buttonText()  {
    switch (this.state.ui)  {
      case 1:
        return "Try me out!";
      case 2:
        return "Send me a text!";
    }
    return "Preview Now";
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-text">
          <h2>
            Free help is only a text away.
          </h2>
          <p>Get information about available services sent straight to your phone.</p>
          <br />
          <Transition>
            {this.renderLinkNumber()}
          </Transition>
        </div>
        {this.renderPhoneInput()}
        <button
          onClick={ () => this.handleDisplayStatus()}
          className="splash-button"
          >{this.buttonText()}</button>
        <div className="splash_phone">
          <img
            src="https://res.cloudinary.com/trwong/image/upload/v1517120829/splash_iphone_imwrpb.png"
            alt="iphone with response from Link"  />
        </div>
      </div>
    );
  }
}


