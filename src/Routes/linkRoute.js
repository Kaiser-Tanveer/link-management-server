const express = require("express");
const { addLinks, getLinks } = require("../Controllers/linkController");

const router = express.Router();

router.post("/add", addLinks);
router.get("/get-links", getLinks);

module.exports = router;