import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();

dotenv.config()

connectDB()

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("API IS RUNNING")
})
app.use("/api/products", productRoutes)
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})

// iLnMBnYQsQBHlzWO