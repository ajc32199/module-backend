import { MongoCLient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoCLient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  //connect the client to server
  await client.connect();

  //send a ping to confirm a succesful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}

let db = client.db("tkemembers");

export default db;
