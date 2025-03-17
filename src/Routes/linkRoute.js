const express = require("express");
const { addLinks } = require("../Controllers/linkController");

const router = express.Router();

router.post("/add", addLinks);

module.exports = router;