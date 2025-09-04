import express from "express";

const router = express.Router();

router.get("/sth", (req, res) => {
  res.status(200).json({
    msg: "u just fetched the notes",
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    msg: "note just created successfully",
  });
});

router.put("/:id", (req, res) => {
  res.status(201).json({
    msg: "note just updateed successfully",
  });
});

router.delete("/:id", (req, res) => {
  res.status(201).json({
    msg: "note just deleted successfully",
  });
});




export default router;
