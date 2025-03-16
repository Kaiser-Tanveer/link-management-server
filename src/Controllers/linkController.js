const { ObjectId } = require('mongodb');

// Add User 
const addLinks = async (req, res) => {
    try {
        const linkData = { ...req.body };
        const linkCollection = req.client.db('Link_Management').collection('links');
        const result = await linkCollection.insertOne(linkData);
        res.status(201).json({ message: `Link added successfully`, data: result });
    } catch (error) {
        console.error(`Error adding Account`, error);
        res.status(500).json({ error: `Failed to add link`});
    }
};

module.exports = { addLinks };