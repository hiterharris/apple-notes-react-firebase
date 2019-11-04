import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import Nav from './Nav/Nav';
import NoteForm from './NoteForm/NoteForm';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    // Setting up the state of the component
    this.state = {
      notes: [
          { id: 1, noteContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        ],
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
          <div className="notesList">
            <h3>Note #1</h3>
          </div>

          <div className="note">
            {
              this.state.notes.map( (note) => {
                return (
                  <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
                );
              })
            }
          </div>
          
        </div>

        <NoteForm addNote={this.addNote} />

    </div>
    );

  }
}
