import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const db = client.db("ecom");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const items = await db.collection("products").find().toArray();
  res.status(200).json(items);
});

app.post("/", async (req, res) => {
  const { name, price } = req.body;
  const data = {
    name: name,
    price: price,
  };
  const newProduct = await db.collection("products").insertOne(data);
  res.status(200).json(newProduct);
});

app.post("/users", async (req, res) => {
  const { name, email, pass } = req.body;
  const data = {
    name: name,
    email: email,
    pass:pass,
  };
  const newUser = await db.collection("users").insertOne(data);
  res.status(200).json(newUser);
});

app.post("/find",async (req,res)=> {
  const {email,pass} = req.body
  
})

app.listen(8080, () => {
  console.log("Server started at port 8080");
});

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  console.log(req);
  res.send("Hello World");
});

app.get("/:name", (req, res) => {
  console.log(req.params);
  res.send("Good Morning");
});