import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNote, getNotesOfUserId } from "../api/requests";
import { addNote, resetNotes } from "../redux/notesSlice";

const NotesForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateNote = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      setErrorMessage("A note can't be empty");
    } else {
      setErrorMessage("");
      const note = {
        userId: user.userId,
        title: title,
        content: content,
      };
      createNote(note)
        .then(() => {
          setTitle("");
          setContent("");
          dispatch(resetNotes());
          getNotesOfUserId(user.userId).then((res) => {
            res.data.map((note) => dispatch(addNote(note)));
          });
        })
        .catch((err) => setErrorMessage(err.message));
    }
  };

  return (
    <div className="notes-form">
      <div className="notes-form-container">
        <div className="notes-form-title">Create a note</div>
        <form className="notes-form-form" onSubmit={handleCreateNote}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button>Create</button>
        </form>
        {errorMessage === "" ? (
          ""
        ) : (
          <div className="error-message">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default NotesForm;
