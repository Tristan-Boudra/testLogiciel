import { render, screen, fireEvent } from '@testing-library/react';
import NoteForm from './NoteForm';
import React from 'react';
import '@testing-library/jest-dom';

test('composant NoteForm', () => {
  render(<NoteForm />);

  expect(screen.getByLabelText('Title:')).toBeInTheDocument();
  expect(screen.getByLabelText('Grade:')).toBeInTheDocument();
  expect(screen.getByLabelText('Comment:')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Create Note' })).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Note title' } });
  fireEvent.change(screen.getByLabelText('Grade:'), { target: { value: '10' } });
  fireEvent.change(screen.getByLabelText('Comment:'), { target: { value: 'Note comment' } });

  fireEvent.click(screen.getByRole('button', { name: 'Create Note' }));

  expect(screen.getByLabelText('Title:')).toHaveValue('');
  expect(screen.getByLabelText('Grade:')).toHaveValue('');
  expect(screen.getByLabelText('Comment:')).toHaveValue('');

  expect(screen.getByText('Note title')).toBeInTheDocument();
  expect(screen.getByText('Note grade: 10')).toBeInTheDocument();
  expect(screen.getByText('Note comment')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Delete' }));

  expect(screen.queryByText('Note title')).not.toBeInTheDocument();
  expect(screen.queryByText('Note grade: 10')).not.toBeInTheDocument();
  expect(screen.queryByText('Note comment')).not.toBeInTheDocument();
});
