import { useSelector } from "react-redux";
import Note from "./Note";

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note._id}
          title={note.title}
          content={note.content}
          date={new Date(note.date)}
        />
      ))}
    </div>
  );
};

export default Notes;
