import { createEffect, createSignal } from 'solid-js';

export type Note = {
  id: string;
  title: string;
  grade: string;
  comment: string;
  createdAt: Date;
};

type NoteState = {
  notes: Note[];
  activeNote: string | null;
};

const createStore = () => {
  const [notes, setNotes] = createSignal<Note[]>([]);
  const [activeNote, setActiveNote] = createSignal<string | null>(null);

  createEffect(() => {
    // On initial load, retrieve notes from localStorage if available
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  });

  createEffect(() => {
    // Whenever notes change, update localStorage
    localStorage.setItem('notes', JSON.stringify(notes()));
  });

  const createNote = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const updateNote = (note: Note) => {
    setNotes((prevNotes) => {
      const index = prevNotes.findIndex((n) => n.id === note.id);
      if (index !== -1) {
        const updatedNotes = [...prevNotes];
        updatedNotes[index] = note;
        return updatedNotes;
      }
      return prevNotes;
    });
  };

  return {
    notes,
    activeNote,
    setActiveNote,
    createNote,
    updateNote,
  };
};

export const { notes, activeNote, setActiveNote, createNote, updateNote } = createStore();
export type { NoteState };
