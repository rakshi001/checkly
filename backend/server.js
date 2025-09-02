import express from "express";
import noteRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", noteRoutes);

app.post("/api/notes", (req, res) => {
  res.status(201).json({
    msg: "it is a post req",
  });
});

app.listen(5001, () => {
  console.log("server started at 5001");
});
