import React from 'react';
import { Button } from 'react-bootstrap';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayMap: false};
    this.handleMap = this.handleMap.bind(this);
  }

  handleMap() {
    this.setState({displayMap: !this.state.displayMap});
    // console.log(this.state);
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
        <button onClick={() => this.handleMap()} className="splash-button">Preview Now</button>
        <div className="splash_phone">
          <img
            src="https://res.cloudinary.com/trwong/image/upload/v1517105698/imageedit_2_7721807844_rodzu1.png"
            alt="iphone with response from Link"  />
        </div>
      </div>
    );
  }
}
