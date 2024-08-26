require('dotenv').config();
const memberRoutes = require('./routes/members');

const express = require('express');

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/members/', memberRoutes);


app.listen(process.env.PORT, () =>{
    console.log(`Server is running on ${process.env.PORT}`);
});

