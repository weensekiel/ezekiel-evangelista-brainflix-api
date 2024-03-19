import express from "express";
import videoRoutes from "./routes/video.js";

const app = express();
const PORT = 5678;

app.get("/", (req, res) => {
    res.send("this is my swamp!");
})

app.use("/videos", videoRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})