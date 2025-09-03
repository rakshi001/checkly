import express from "express";
import noteRoutes from './routes/notesRoutes.js'

const app = express();

// app.get("/api/notes", (req, res) => {
//   res.status(200).json({
//     msg: "hi there",
//   });
// });

app.get("api/notes",noteRoutes)

app.listen(5000);
