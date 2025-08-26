import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.status(200).res.send("hi there");
});
// get post put delete
// to create

app.post("/api", (req, res) => {
  res.status(200).res.send("your note created successfully");
});

app.listen(5001, () => {
  console.log("server started at 5001");
});
