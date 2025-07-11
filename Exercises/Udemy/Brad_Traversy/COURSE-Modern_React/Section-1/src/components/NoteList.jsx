export const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className='text-center test-gray-500'>No Notes Yet!</p>;
  }
  return (
    <div className='space-y-4'>
      {notes.map((note) => (
        <div
          key={note.id}
          className='p-4 bg-white rounded-lg shadow-md border-l-4'>
          <h3 className='text-lg font-bold'>{note.title}</h3>
          <p className='test-sm test-gray-600'>
            <strong>Category: </strong> {note.category}
          </p>
          <p className='test-sm test-gray-600'>
            <strong>Priority: </strong> {note.priority}
          </p>
          <p className='mt-2'>{note.description}</p>
          {/* delete button */}
          <button
            className='mt-3 text-red-500 cursor-pointer transition hover:text-red-700'
            onClick={() => deleteNote(note.id)}>
            Delete 🗑️
          </button>
        </div>
      ))}
    </div>
  );
};
