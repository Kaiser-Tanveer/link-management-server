const express = require("express");
const { addOwnLinks, getOwnLinks, addSocialLinks, getSocialLinks } = require("../Controllers/linkController");

const router = express.Router();

// Own links routes 
router.post("/add", addOwnLinks);
router.get("/get-links", getOwnLinks);

// Social links routes 
router.post("/add-social", addSocialLinks);
router.get("/get-social", getSocialLinks);

module.exports = router;