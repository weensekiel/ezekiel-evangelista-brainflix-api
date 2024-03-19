import express from "express";
import videos from "../data/videos.json" assert {type: "json"};
import details from "../data/video-details.json" assert {type: "json"};

const router = express.Router();

router.get("/", (req, res) => {
    res.json(videos);
})

router.get("/:id", (req, res) => {
    res.send(details.filter(video => video.id === req.params.id));
})

export default router;