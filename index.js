import express from "express";
import router from "./routes/index.js"
import mongoose from "./db/index.js";

const app = express();

mongoose.connection.on("open", () => {
    console.log("Database connected")
});

mongoose.connection.on("error", (err) => {
    console.log("Database error-->", err)
});

app.use(express.json());


app.get("/api", (req, res) => {
    res.send(new Date().toString());
});

app.use("/api", router)

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
