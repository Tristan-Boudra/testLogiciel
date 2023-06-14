import React, { useState } from 'react';
import { notes, activeNote, setActiveNote, createNote, updateNote } from '../../store/notes';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');
  const [comment, setComment] = useState('');
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: uuidv4(),
      title,
      grade,
      comment,
      createdAt: new Date(),
    };
    createNote(note);
    setTitle('');
    setGrade('');
    setComment('');
  };

  const handleNoteClick = (noteId) => {
    setActiveNote(noteId);
  };

  const getNoteBackgroundColor = (grade) => {
    if (grade < 8) {
      return '#ff6961';
    } else if (grade < 10) {
      return '#ffbc71';
    } else if (grade < 13) {
      return '#fff687';
    } else if (grade >= 13) {
      return '#aeff78';
    }
  };

  return (
    <div className="note-form-container">
      <h1>Create a Note</h1>
      <form onSubmit={handleFormSubmit} className="note-form">
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Grade:
          <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <button type="submit">Create Note</button>
      </form>

      <div className="notes-list-container">
        <h2>Notes List:</h2>
        <ul className="notes-list">
          {notes().map((note, index) => (
            <li
              key={index}
              className={`note-item ${activeNote() === note.id ? 'active' : ''}`}
              style={{ backgroundColor: getNoteBackgroundColor(note.grade) }}
              onClick={() => handleNoteClick(note.id)}
            >
              <strong>Title:</strong> {note.title}, <strong>Note:</strong> {note.grade}, <strong>Comment:</strong>{' '}
              {note.comment}
              <br />
              <span className="note-date">Created on: {note.createdAt.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteForm;
