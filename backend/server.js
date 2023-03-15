import express from "express"
import products from "./data/products.js";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";
const app = express();

dotenv.config()

connectDB()

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("API IS RUNNING")
})
app.get("/api/products", (req, res) => {
    res.json(products)
})

// getting a single product by id
app.get("/api/products/:id", (req, res) => {
    const{id} = req.params
    const product = products.find((p) => p._id === id)
    res.json(product)
})
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})

// iLnMBnYQsQBHlzWO