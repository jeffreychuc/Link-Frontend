import React from 'react';

export default class SampleInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('winning');
    return (
      <div className="about">
        <h2 className="header">About</h2>
        <ul>
          <li><strong>Link</strong> was designed with <strong>accessability</strong> in mind, all information is accessable through a SMS gateway.</li>
        </ul>
        <ul>
          <br />
          <div class='numberList'>
            <div>
              <h2 class='numberBig'>1</h2>
            </div>
            <div class='textBody'>
              <h2>Tell us what you need</h2>
              <li><strong>Link</strong> uses natural language processing to determine what the user is requesting</li>
            </div>
          </div>
          <div class='numberList'>
            <div>
              <h2 class='numberBig'>2</h2>
            </div>
            <div class='textBody'>
              <h2>Tell us where you are</h2>
              <li><strong>Link</strong> only returns the most relevant results.</li>
            </div>
          </div>
          <div class='numberList'>
              <h2 class='numberBig'>3</h2>
            <div class='textBody'>
              <div>
                <h2>Thats it!</h2>
                <li>We're here for you, 24/7, 365 days a year. Ask us questions anytime you want, theres no limit.</li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
