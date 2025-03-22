const { ObjectId } = require('mongodb');

// Add own Link
const addOwnLinks = async (req, res) => {
    try {
        const linkData = { ...req.body };
        const linkCollection = req.client.db('Link_Management').collection('own-links');
        const result = await linkCollection.insertOne(linkData);
        res.status(201).json({ message: `Link added successfully`, data: result });
    } catch (error) {
        console.error(`Error adding link`, error);
        res.status(500).json({ error: `Failed to add link`});
    }
};

// Get own links 
const getOwnLinks = async (req, res) => {
    try {
        const linkCollection = req.client.db('Link_Management').collection('own-links');
        const result = await linkCollection.find({}).toArray();
        console.log(result);
        res.status(200).json({ message: `Links fetched successfully`, data: result });
    } catch (error) {
        console.error(`Error fetching links`, error);
        res.status(500).json({ error: `Failed to fetch link`});
    }
};
const addSocialLinks = async (req, res) => {
    try {
        const linkData = { ...req.body };
        const linkCollection = req.client.db('Link_Management').collection('social-links');
        const result = await linkCollection.insertOne(linkData);
        res.status(201).json({ message: `Link added successfully`, data: result });
    } catch (error) {
        console.error(`Error adding link`, error);
        res.status(500).json({ error: `Failed to add link`});
    }
};

// Get own links 
const getSocialLinks = async (req, res) => {
    try {
        const linkCollection = req.client.db('Link_Management').collection('social-links');
        const result = await linkCollection.find({}).toArray();
        console.log(result);
        res.status(200).json({ message: `Links fetched successfully`, data: result });
    } catch (error) {
        console.error(`Error fetching links`, error);
        res.status(500).json({ error: `Failed to fetch link`});
    }
};

module.exports = { addOwnLinks, getOwnLinks, addSocialLinks, getSocialLinks };
