const Spots = require('../models/Spots');

const index = async (req, res) => {
    const { user_id } = req.headers;

    const spots = await Spots.find({ user_id });

    return res.json(spots);
}

module.exports = { index }; 