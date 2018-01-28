import React from 'react';
import { Button } from 'react-bootstrap';
import MapDisplay from './mapdisplay_container';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayMap: false};
    this.handleMap = this.handleMap.bind(this);
  }

  handleMap() {
    this.setState({displayMap: !this.state.displayMap});
    console.log(this.state);
  }

  render() {
    return this.state.displayMap ? (<MapDisplay />) : (
      <div className="splash">
        <div className="splash_text">
        <h2>
          Link, we're only a text away.<br/>24/7, 365
        </h2>
        <h3>
          text us at <br/> 1.555.5555
        </h3>
        </div>
        <Button onClick={() => this.handleMap()}>Click me</Button>
        <div className="splash_phone">
          <img src="assets/splash_iphone.png" alt="iphone with response from Link"  />
        </div>
      </div>
    );
  }
}
