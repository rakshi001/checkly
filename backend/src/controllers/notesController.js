import Note from "../model/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("error in getAllNotes controler", error);

    res.status(500).json({
      message: "Internal ser ver error",
    });
  }
};

export const createNote = async (req, res) => {
  try{
      
  }
  catch{

  }
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
