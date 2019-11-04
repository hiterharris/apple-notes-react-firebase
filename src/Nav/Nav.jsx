import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    // Set newNoteContent to the value of what's in the input box
    handleUserInput(e) {
        console.log(this);
        this.setState({
            newNoteContent: e.target.value, // Value of the text input
        });
    }

    render() {
        return (
        <div className="nav">
            <div className="window-icons">Window Icons Here</div>
            <div className="note-icons">Note Icons Here</div>
            <div className="search-bar">
                <input
                    className="noteInput"
                    placeholder="Search"
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput}
                />
            </div>
        </div>
        );
    }
}
