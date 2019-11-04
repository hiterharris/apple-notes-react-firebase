import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import Nav from './Nav/Nav';
import NoteForm from './NoteForm/NoteForm';
import DB_CONFIG from './Config/config';
import 'firebase/database';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    if (!firebase.apps.length) {
      try {
          // firebase.initializeApp(DB_CONFIG)
          this.app = firebase.initializeApp(DB_CONFIG);
          this.db = this.app.database().ref().child('notes');
      } catch (err) {
          console.error('Firebase initialization error raised', err.stack)
      }
  }

    this.state = {
      notes: [],
      }
    }

    componentWillMount() {
      const previousNotes = this.state.notes;
      if (!firebase.apps.length) {
        try {
          this.database.on('child_added', snap => { // snapshot of previous notes
            previousNotes.push({
              id: snap.key,
              noteContent: snap.val().noteContent,
            });
    
            this.setState({
              notes: previousNotes,
            })
          });
    
        } catch (err) {
            console.error('Firebase initialization error raised', err.stack)
        }
      }
    }

    addNote(note) {
      // this.database.push().set({ noteContent: note});
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
