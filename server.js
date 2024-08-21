const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
