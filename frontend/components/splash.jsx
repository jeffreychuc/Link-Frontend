import React from 'react';
import { Button } from 'react-bootstrap';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayMap: false};
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-text">
        <h2>
          We're only a text away. 24/7. 365.
        </h2>
        <h3>
          text (510) 999 6129
        </h3>
        </div>
        <button
          onClick={ () => window.scrollTo(0, 3000) }
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
