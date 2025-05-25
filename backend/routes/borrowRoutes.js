const express = require("express");
const Borrowing = require("../models/Borrowing");
const router = express.Router();

router.post("/:bookId", async (req, res) => {
  const borrow = new Borrowing({
    userId: req.user.id,
    bookId: req.params.bookId,
    borrowedAt: new Date(),
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    returned: false,
  });
  await borrow.save();
  res.json(borrow);
});

router.get("/", async (req, res) => {
  const records = await Borrowing.find({ userId: req.user.id });
  res.json(records);
});

router.post("/return/:bookId", async (req, res) => {
  const record = await Borrowing.findOne({
    userId: req.user.id,
    bookId: req.params.bookId,
    returned: false,
  });
  if (record) {
    record.returned = true;
    await record.save();
    res.json({ message: "Book returned" });
  } else {
    res.status(404).json({ message: "Borrow record not found" });
  }
});

module.exports = router;
