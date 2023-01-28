import { formatDate } from "./formatDate";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/delete.png";

const Note = ({ title, content, date }) => {
  const formatedDate = formatDate(date);

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-info">
          <div className="note-title">{title}</div>
          <div className="note-date">{formatedDate}</div>
        </div>
        <div>
          <img src={editIcon} alt="edit" className="note-icon" />
        </div>
        <div>
          <img src={deleteIcon} alt="edit" className="note-icon" />
        </div>
      </div>
      <div className="note-body">
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Note;
