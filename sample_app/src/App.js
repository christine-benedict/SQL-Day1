import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Header from "./Header"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greetings: [
        {name: 'Test'},
        {name: 'Hello'},
        {name: 'Yo'}
      ]
    }
  }

render(){
  return (
     <div>
       <div>
         <Header greetings={this.state.greetings} />
       </div>
     </div>

   );
 }

}

export default App;
