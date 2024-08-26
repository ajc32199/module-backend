const express = require("express");
const Member = require("../models/MemberModel");
const router = express.Router();

// @route GET api/members
router.get("/", (req, res) => {
  res.json({ msg: "GET ALL MEMBERS" });
});

//get single member
router.get("/:id", (req, res) => {
  res.json({ msg: `GET MEMBER WITH ID ${req.params.id}` });
});

//create member
router.post("/", async (req, res) => {
  const {
    name,
    position,
    grade,
    debt,
    active_status,
    scroll_number,
    comments,
  } = req.body;

  try {
    const newMember = await Member.create({
      name,
      position,
      grade,
      debt,
      active_status,
      scroll_number,
      comments,
    });

    res.status(200).json(newMember);
  } catch (error) {
    res.status(400).json({ msg: "CREATE MEMBER FAILED" });
  }
});

//delete member
router.delete("/:id", (req, res) => {
  res.json({ msg: `DELETE MEMBER WITH ID ${req.params.id}` });
});

//update member
router.patch("/:id", (req, res) => {
  res.json({ msg: `UPDATE MEMBER WITH ID ${req.params.id}` });
});

module.exports = router;
