import express from "express";

//this will help us connect to the databse
import db from "../db/connection.js";

//this help convert the id from string ot objectID from the _id
import { ObjectID } from "mongodb";

//router is an instance of express router
//we use it to define our routes
//the router will be added as a middleware and will take control of requests
//starting with the path /record
const router = express.Router();

//This section will help you get a list of all the records
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectID(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) {
    res.send("Record not found").status(404);
  } else {
    res.send(result).status(200);
  }
});

router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectID(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating records");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
