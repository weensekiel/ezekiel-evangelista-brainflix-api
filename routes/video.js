import express from "express";
import { uuid } from "uuidv4";
import videos from "../data/videos.json" assert {type: "json"};
import details from "../data/video-details.json" assert {type: "json"};

const router = express.Router();

router.get("/", (req, res) => {
    res.json(videos);
})

router.get("/:id", (req, res) => {
    res.json(details.filter(video => video.id === req.params.id));
})

router.post("/", (req, res) => {
    const newVideo = {
        title: "title",
        channel: "Ezekiel Evangelista",
        image: "img src",
        id: uuid()
    };
})

export default router;