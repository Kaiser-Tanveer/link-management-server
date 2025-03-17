const { ObjectId } = require('mongodb');

// Add Link
const addLinks = async (req, res) => {
    try {
        const linkData = { ...req.body };
        console.log(linkData);

        const linkCollection = req.client.db('Link_Management').collection('links');
        const result = await linkCollection.insertOne(linkData);

        res.status(201).json({ message: `Link added successfully`, data: result });
    } catch (error) {
        console.error(`Error adding Account`, error);
        res.status(500).json({ error: `Failed to add link`});
    }
};

module.exports = { addLinks };
