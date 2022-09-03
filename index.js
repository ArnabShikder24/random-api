const app = require("./app");
const dev = require("./config/config");
// const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = dev.app.port;


//Database
// const uri = ``;
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