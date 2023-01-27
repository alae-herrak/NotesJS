import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.json({ message: error });
  }
};

export const createNote = async (req, res) => {
  const note = new Note({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  });
  try {
    const newNote = await note.save();
    res.json(newNote);
  } catch (error) {
    res.json({ message: error });
  }
};

export const getNotesOfUserId = async (req, res) => {
  try {
    const notes = await Note.find({
      userId: { $regex: `^${req.params.userId}$`, $options: "i" },
    });
    res.json(notes);
  } catch (error) {
    res.json({ message: error });
  }
};

export const updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.updateOne(
      { _id: req.params.noteId },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          date: new Date(),
        },
      }
    );
    res.json(updatedNote);
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.deleteOne({ _id: req.params.noteId });
    res.json(deletedNote);
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteNotesOfUserId = async (req, res) => {
  try {
    const deletedNotes = await Note.deleteMany({ userId: req.params.userId });
    res.json(deletedNotes);
  } catch (error) {
    res.json({ message: error });
  }
};
