import { useState } from "react";
import { useSelector } from "react-redux";
import { createNote } from "../api/user";

const NotesForm = () => {
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
