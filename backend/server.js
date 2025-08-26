import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({
    body: "hi there how are u",
  });
});
// get post put delete

app.post('/api/notes', (req,res)=>{
  res.status(201).json({
    message:"hi buddy post created successfully!"
  })
})

app.post('/api/notes', (req,res)=>{
  res.status(200).json({
    message:"hi buddy post created successfully!"
  })
})



app.listen(5001, () => {
  console.log("server started at 5001");
});
