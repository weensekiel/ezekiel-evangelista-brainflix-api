import express from "express";
import videos from "../data/videos.json" assert {type: "json"};

const router = express.Router();

router.get("/", (req, res) => {
    res.json(videos);
})

export default router;