const User = require('../models/User');

const store = async (req, res) => {
    const { email } = req.body;

    let usuario = await User.findOne({email})

    if(!usuario) usuario = await User.create({ email })

    return res.json(usuario)
}

module.exports = { store }
