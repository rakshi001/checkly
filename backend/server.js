import express from "express";
import noteRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes",noteRoutes)



app.listen(5001, () => {
  console.log("server sta rted at 5001");
});
