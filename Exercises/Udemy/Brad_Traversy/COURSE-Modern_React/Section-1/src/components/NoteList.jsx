import { Note } from "./Note";

export const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className='text-center test-gray-500'>No Notes Yet!</p>;
  }
  return (
    <div className='space-y-4'>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};
