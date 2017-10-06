import firebase, { auth, provider, authUi, database } from './firebase.js';
import React, { Component } from 'react';
import './App.css';
import Lessons from './Lessons.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      view: "login"
    }
  }
  render() {
    return (
      <div className='app'>
  <header>
    <div className="wrapper">
      <div>
      <h1>Vokie - Vokabeltrainer</h1>
      <ul className="headerList">
        <li className="headerItem"><a className={this.state.view == "training" ? "active" : "view"}  href='#training' 
            onClick={() =>  this.setState({view: "training"})}>Trainieren</a></li>
        <li className="headerItem"><a className={this.state.view == "lessons" ? "active" : "view"}  href='#lessons' 
            onClick={() =>  this.setState({view: "lessons"})}>Lektionen</a></li>
      </ul>
      </div>
      {this.state.user ?
        <img onClick={() => this.logout()} className='user-profile'src={this.state.user.photoURL} />
        :
        <button onClick={() => this.login()}>Anmelden</button>              
  } 
  </div>
  </header>
  { this.state.view == "login"  ? 
    <div style={{textAlign : 'center', backgroundColor: 'white'}}>
      <div>Bitte erst anmelden</div>
      <div id="firebaseui-auth" /> 
    </div> : null }
  
  { this.state.view == "training" ? <div> Trainieren </div> : null }
  { this.state.view == "lessons" ? <Lessons />    : null }
  { this.state.view == "createLesson" ? 
  <div> 
    <div>
    Lektion erstellen
    </div>
    <button onClick={this.setState({view: "lessons"})}>Speichern</button> 
  </div> : null }
</div>
    );
  }
  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user : user, view : user ? "training" : "login" });
      } 
    });
  }

logout = () => {
    authUi.reset();
        this.setState({
            user: null,
            view: "login"
        })
    }

login = () => {
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
      this.setState({
        user : user,
        view : "training"
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
