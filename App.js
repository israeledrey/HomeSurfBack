const express  = require ("express");
const cors =  require ("cors");
const mongoDb = require ("mongodb")

const app = express();

const uri = "mongodb+srv://israel:Israel211@cluster0.qvg0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new mongoDb.MongoClient (uri);

app.use(cors());

app.get("/api/boards", async(req, res) => {
    try {
        console.log("try is good");
        
        await client.connect();
        const db = client.db("test")
        const col = db.collection("boards")
        const boards = await col.find({}).toArray();
        res.json({ dataBase: boards });
    } catch (err) {
        console.error("big pro lol", err);
        res.status(500).json({ error: "There is error" });
    } finally {
        await client.close();
    }

});

app.listen(3000,()=>{console.log("ecsess");
});
