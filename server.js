import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import videoRoutes from "./routes/video.js";

dotenv.config();

const app = express();
app.use(cors());
const { PORT } = process.env;

app.get("/", (req, res) => {
    res.send("this is my swamp!");
})

app.use("/videos", videoRoutes);
app.use("/:id", videoRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})