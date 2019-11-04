import React, { Component } from 'react';
import './NoteForm.css';

export default class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // Set newNoteContent to the value of what's in the input box
    handleUserInput(e) {
        this.setState({
            newNoteContent: e.target.value, // Value of the text input
        });
    }

    writeNote() {
        // Call method that sets the noteContent for a note to the value of the input
        this.props.addNote(this.state.newNoteContent);
        
        // Set newNoteContent back to an empty string
        this.setState({
            newNoteContent: '',
        });
    }

    render() {
        return (
            <div className="">
                <input
                    className="noteInput"
                    placeholder="New Note..."
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput}
                />
                <button
                    className="noteButton"
                    onClick={this.writeNote}>Add Note
                </button>
            </div>
        );
    }
}
