const { ObjectId } = require('mongodb');

// Add own Link
const linkCollection = req.client.db('Link_Management').collection('links');
const addLinks = async (req, res) => {
    try {
        const linkData = { ...req.body };
        const result = await linkCollection.insertOne(linkData);
        res.status(201).json({ message: `Link added successfully`, data: result });
    } catch (error) {
        console.error(`Error adding link`, error);
        res.status(500).json({ error: `Failed to add link`});
    }
};

// Get own links 
const getLinks = async (req, res) => {
    try {
        const result = await linkCollection.find({}).toArray();
        res.status(200).json({ message: `Links fetched successfully`, data: result });
    } catch (error) {
        console.error(`Error fetching links`, error);
        res.status(500).json({ error: `Failed to fetch link`});
    }
};

module.exports = { addLinks, getLinks };
