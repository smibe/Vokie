import firebase, { auth, provider, authUi, database } from './firebase.js';
import React, { Component } from 'react';
import './App.css';

class Lessons extends Component {
  constructor() {
    super();
    this.state = {
        lessons: []
   }
  }
  componentWillMount() {
      let lessonsRef = firebase.database().ref('lessons');
      lessonsRef.on('child_added', snapshot => {
          let lesson = { name:snapshot.val().name, id: snapshot.key  }
          this.setState({lessons: [lesson].concat(this.state.lessons)})
      })
  }
  createLesson(lesson)
  {
      let lessonsRef = firebase.database().ref('lessons');
      lessonsRef.push({name:lesson})
      
  }
  render() {
    return (
    <div> 
        <div>
        Lektionen
        </div>
        <div>
        <ul>
            {
            this.state.lessons.map( lesson => <li>{lesson.name}</li>)
            }
        </ul>
        </div>
        <label for="newLesson">Neue lektion:</label><input ref="newLesson" style={{width:'200px'}} type="text"></input>
       <button onClick={() => this.createLesson(this.refs.newLesson.value)}>Hinzufügen</button> 
    </div> 
    )}
}

export default Lessons;
