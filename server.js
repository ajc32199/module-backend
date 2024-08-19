const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const uri =
  "mongodb+srv://adamchiarella:YStb4pt9flcJz5Re@membermodule.qbpep.mongodb.net/?retryWrites=true&w=majority&appName=MemberModule";

//middleware

app.use(cors());
app.use(express.json());
app.use("/api/members", require("./routes/Members"));

//MongoDB connection
mongoose
  .connect(uri, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

//start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
