import React from 'react';

export default class SampleInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h2 className="header">About</h2>
        <ul>
          <li><strong>Link</strong> was designed with <strong>accessability</strong> in mind, all information is accessable through a <strong>simple text message</strong>.</li>
        </ul>
        <ul>
          <br />
          <div className='numberList'>
            <div>
              <h2 className='numberBig'>1</h2>
            </div>
            <div className='textBody'>
              <h2><strong>Tell us what you need</strong></h2>
              <li><strong>Link</strong> uses advanced AI natural language processing to determine what the user is requesting</li>
            </div>
          </div>
          <div className='numberList'>
            <div>
              <h2 className='numberBig'>2</h2>
            </div>
            <div className='textBody'>
              <h2><strong>Tell us where you are.</strong></h2>
              <li><strong>Link</strong> only returns nearest relevant results.</li>
            </div>
          </div>
          <div className='numberList'>
              <h2 className='numberBig'>3</h2>
            <div className='textBody'>
              <div>
                <h2>Thats it!</h2>
                <li>We're here for you, 24/7, 365 days a year. Ask us questions anytime you want, theres no limit. No questions asked, only questions answered.</li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
