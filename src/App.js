import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import Nav from './Nav/Nav';
import NoteForm from './NoteForm/NoteForm';
import DB_CONFIG from './Config/config';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');

    // Setting up the state of the component
    this.state = {
      notes: [],
      }
    }

  addNote(note) {
    // Push note on to the notes array
    const previousNotes = this.state.notes;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
    
    this.setState({
      notes: previousNotes,
    });
  }

  render() {

    return (
      <div className="app">

        <Nav />

        <div className="notesBody">
            {
              this.state.notes.map( (note) => {
                return (
                  <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
                );
              })
            } 
        </div>

        <NoteForm addNote={this.addNote} />

    </div>
    );

  }
}
