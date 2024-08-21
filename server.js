const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const records = require("./routes/record.js");

require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

//start express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
