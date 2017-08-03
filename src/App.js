import firebase, { auth, provider, authUi } from './firebase.js';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  render() {
    return (
      <div>
      <h1>Vokabeltrainer</h1>
      {this.state.user ?
        <button onClick={this.logout}>Abmelden</button>                
        :
        <button onClick={this.login}>Anmelden</button>              
  } 
  <div id="firebaseui-auth"></div>
  </div>
    );
  }
  componentDidMount = () => {
  }
logout = () => {
    authUi.reset();
        this.setState({
            user: null
        })
    }

login = () => {
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
      this.setState({
        user
      });
          return false;
        }
      },
      'signInOptions': [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  }
}

export default App;
