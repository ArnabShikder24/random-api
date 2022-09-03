const app = require("./app");
// const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const PORT = process.env.PORT || 5000;


//Database
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g5hmi.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run() {
//       try {
//             await client.connect();
            

//       }
//       finally{}
// }
// run().catch(console.dir);


app.listen(PORT, () => {
      console.log(`The server is Running at ${PORT}`);
})