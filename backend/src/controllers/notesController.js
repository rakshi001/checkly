export const getAllNotes = (req, res) => {
  res.status(200).json({
    msg: "u just fetched the notes ",
  });
};

export const createNote = (req, res) => {
  res.status(201).json({
    msg: "note just cre ated successfully",
  });
};

export const updateNote = (req, res) => {
  res.status(201).json({
    msg: "note just updateed successfully",
  });
};

export const deleteNote = (req, res) => {
  res.status(201).json({
    msg: "note just deleted successfully",
  });
};
