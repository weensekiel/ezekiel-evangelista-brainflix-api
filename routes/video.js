import express from "express";
import { uuid } from "uuidv4";
import fs from "fs";
import details from "../data/video-details.json" assert {type: "json"};

const router = express.Router();

router.use("../public/images", express.static("images"));
router.use(express.json());

function readData() {
    try {
        const data = fs.readFileSync("./data/video-details.json");
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
}

function writeData(data) {
    try {
        fs.writeFileSync("./data/video-details.json", JSON.stringify(data, null, 4));
    } catch (err) {
        console.log(err);
    }
}

router.get("/", (req, res) => {
    const videos = readData();
    res.json(videos);
})

router.get("/:id", (req, res) => {
    res.json(details.filter(video => video.id === req.params.id));
})

router.post("/", (req, res) => {
    const { title, channel } = req.body;

    if (!title || ! channel) {
        return res.status(404).send("Title/channel is missing. Please provide a title or channel name");
    }

    const newVideo = {
        id: uuid(),
        title,
        channel,
        image: "../public/images/cat.png"
    };

    const videos = readData();

    videos.push(newVideo);

    writeData(videos);

    res.status(201).json(videos);
})

export default router;