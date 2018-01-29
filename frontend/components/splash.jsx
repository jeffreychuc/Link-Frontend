import React from 'react';
import { Button } from 'react-bootstrap';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayMap: false};
    this.smoothScroll = this.smoothScroll.bind(this);
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

  render() {
    return (
      <div className="splash">
        <div className="splash-text">
        <h2>
          Free help is only a text away.
        </h2>
        <p>Get information about available services sent straight to your phone.</p>
        <br />
        <h3>
          text (510) 999 6129
        </h3>
        </div>
        <button
          onClick={ () => this.smoothScroll(0) }
          className="splash-button"
          >Preview Now</button>
        <div className="splash_phone">
          <img
            src="https://res.cloudinary.com/trwong/image/upload/v1517120829/splash_iphone_imwrpb.png"
            alt="iphone with response from Link"  />
        </div>
      </div>
    );
  }
}
