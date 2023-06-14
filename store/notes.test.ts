import { createStore, notes } from './notes';

describe('Notes', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

test('Ajout nouvelle note a la liste', () => {
const note = {
    id: '1',
    title: 'Test Note',
    grade: '10',
    comment: 'zef',
    createdAt: new Date(),
};

store.createNote(note);

expect(store.notes().length).toBe(1);
expect(store.notes()[0]).toEqual(note);
});

test('Modification dune note existante', () => {
const initialNote = {
    id: '1',
    title: 'Test Note',
    grade: '10',
    comment: 'zef',
    createdAt: new Date(),
};
const updatedNote = {
    ...initialNote,
    grade: '12',
};

store.createNote(initialNote);
store.updateNote(updatedNote);

expect(store.notes().length).toBe(1);
expect(store.notes()[0]).toEqual(updatedNote);
});

test('Supprimer une note existante', () => {
const note1 = {
    id: '1',
    title: 'Note 1',
    grade: '10',
    comment: 'aze',
    createdAt: new Date(),
};
const note2 = {
    id: '2',
    title: 'Note 2',
    grade: '8',
    comment: 'btt',
    createdAt: new Date(),
};
const note3 = {
    id: '3',
    title: 'Note 3',
    grade: '12',
    comment: 'tyn',
    createdAt: new Date(),
};

store.createNote(note1);
store.createNote(note2);
store.createNote(note3);

store.deleteNote('2');

expect(store.notes().length).toBe(2);
expect(store.notes()).toEqual([note1, note3]);
});
  
test('Récupération de toutes les notes', () => {
    const note1 = {
    id: '1',
    title: 'Note 1',
    grade: '8',
    comment: 'Commentaire 1',
    createdAt: new Date(),
    };

    const note2 = {
    id: '2',
    title: 'Note 2',
    grade: '12',
    comment: 'Commentaire 2',
    createdAt: new Date(),
    };

    const note3 = {
    id: '3',
    title: 'Note 3',
    grade: '10',
    comment: 'Commentaire 3',
    createdAt: new Date(),
    };

    store.createNote(note1);
    store.createNote(note2);
    store.createNote(note3);

    const allNotes = notes();

    expect(allNotes).toEqual([note1, note2, note3]);
});
  

test('Tri des notes par date de création', () => {
const note1 = { id: '1', title: 'Note 1', createdAt: new Date('2023-01-01') };
const note2 = { id: '2', title: 'Note 2', createdAt: new Date('2023-02-01') };
const note3 = { id: '3', title: 'Note 3', createdAt: new Date('2023-03-01') };
});
});
