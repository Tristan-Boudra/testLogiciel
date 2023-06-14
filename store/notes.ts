import { createSignal, onCleanup } from 'solid-js';

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

  onCleanup(() => {
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

  const deleteNote = (noteId: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    if (activeNote() === noteId) {
      setActiveNote(null);
    }
  };

  return {
    notes,
    activeNote,
    setActiveNote,
    createNote,
    updateNote,
    deleteNote,
  };
};

export const {
  notes,
  activeNote,
  setActiveNote,
  createNote,
  updateNote,
  deleteNote,
} = createStore();
export type { NoteState };
