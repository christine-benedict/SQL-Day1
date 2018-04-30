import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    let headers = this.props.greetings.map(function(header){
      return(
        <li key={header.name}>{header.name}</li>
      )
    })
      return (
    <ul>
      {headers}
    </ul>
  );

  }
}

export default Header;
