import express from "express";

const app = express();
const PORT = 5678;

app.get("", (req, res) => {
    res.send("this is my swamp!");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})