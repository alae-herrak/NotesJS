import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "./formatDate";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import { deleteNote, getNotesOfUserId } from "../api/requests";
import { addNote, resetNotes } from "../redux/notesSlice";

const Note = ({ id, title, content, date }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const formatedDate = formatDate(date);

  const handleDelete = (id) => {
    const confirmation = confirm("Do you really want to delete this note?");
    if (confirmation) {
      deleteNote(id)
        .then(() => {
          dispatch(resetNotes());
          getNotesOfUserId(user.userId).then((res) => {
            res.data.map((note) => dispatch(addNote(note)));
          });
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-info">
          <div className="note-title">{title}</div>
          <div className="note-date">{formatedDate}</div>
        </div>
        <div>
          <img
            src={deleteIcon}
            alt="edit"
            className="note-icon"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
      <div className="note-body">
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Note;
