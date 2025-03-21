const express = require("express");
const { addOwnLinks, getOwnLinks, addSocialLinks } = require("../Controllers/linkController");

const router = express.Router();

// Own links routes 
router.post("/add", addOwnLinks);
router.get("/get-links", getOwnLinks);

// Social links routes 
router.post("/add", addSocialLinks);
// router.get("/get-links", getOwnLinks);

module.exports = router;