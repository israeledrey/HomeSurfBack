
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://israel:Israel211@cluster0.qvg0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const fs = require("fs");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");



        //.1
        const db = client.db("test")
        const col = db.collection("boards")
        //.2
        const data = JSON.parse(fs.readFileSync('./data/boards.json', 'utf-8'))
        //לא חייב log
        console.log(data);
        //.3
        const p = await col.insertMany(data);
    } catch (err) {
        console.error("Big problem", err);
    }



    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

    run().catch(console.dir);





