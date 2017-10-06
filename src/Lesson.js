import firebase, { auth, provider, authUi } from './firebase.js';
import React, { Component } from 'react';
import './App.css';

class Lesson extends Component {
  constructor() {
    super();
    this.state = {
   }
  }
  render() {
    return (
    <div> 
        <div>
        Lektion erstellen
        </div>
        <button onClick={() => this.setState({view: "createLesson"})}>Lektion speichern</button> 
    </div> 
    )}
}

export default Lessons;
