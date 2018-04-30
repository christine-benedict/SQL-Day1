import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
          <h1>I hear you saying {this.props.greeting} Is that correct?
          </h1>
          <h1>Im gonna let you finish but Beyonce is {this.props.greeting}</h1>
          <h1>Say something {this.props.greeting} </h1>
      </div>

    );
  }
}

export default Header;
