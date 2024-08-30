require("dotenv").config();

const memberRoutes = require("./routes/members");
const authRoutes = require("./routes/auth");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/members/", memberRoutes);
app.use("/api/auth/", authRoutes);

//connect to db
mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on ${process.env.PORT}`);
        console.log(`Database is connected`);
    });
})
.catch((error) =>{console.log(error)});


