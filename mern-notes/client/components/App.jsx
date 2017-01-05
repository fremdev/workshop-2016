import React from 'react';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.less';

const App = React.createClass({
  handleNoteAdd(noteData) {
    console.log(noteData);
  },
  render() {
    return (
      <div className='App'>
        <h2 className='App__header'>NotesApp</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid />
      </div>
    );
  }
});

export default App;
