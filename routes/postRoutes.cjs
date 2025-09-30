const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const dataPath = path.join(__dirname, "../public/fakeData/data.json");

  fs.readFile(dataPath, "utf8", (err, data) => {
    res.json(data);
  });

  // readFile("/etc/passwd", "utf8", callback);
});
// .post("/", (req, res) => {
//   res.json(data);
// });

module.exports = router;
