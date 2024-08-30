const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const User = require("../models/userModel");

const router = express.Router();

const {
  createMember,
  getMembers,
  getAllMembers,
  deleteMember,
  updateMember,
} = require("../controllers/memberController");

// @route GET api/members
router.get("/", getAllMembers);

//get single member
router.get("/:id", getMembers);

//create member
router.post("/", createMember);

//delete member
router.delete("/:id", deleteMember);

//update member
router.patch("/:id", updateMember);

module.exports = router;
