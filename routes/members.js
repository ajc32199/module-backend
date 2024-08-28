const express = require("express");
const router = express.Router();

const {
  createMember,
  getMembers,
  getAllMembers,
} = require("../controllers/memberController");

// @route GET api/members
router.get("/", getAllMembers);

//get single member
router.get("/:id", getMembers);

//create member
router.post("/", createMember);

//delete member
router.delete("/:id", (req, res) => {
  res.json({ msg: `DELETE MEMBER WITH ID ${req.params.id}` });
});

//update member
router.patch("/:id", (req, res) => {
  res.json({ msg: `UPDATE MEMBER WITH ID ${req.params.id}` });
});

module.exports = router;
