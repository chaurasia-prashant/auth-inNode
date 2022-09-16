const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidation } = require('../authController/validator/loginValidator')


// Login
router.post('/login', async (req, res) => {

    const validation = loginValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    // Checking if the user is exist
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Not a register Email');


    // check for correct password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('wrong password');

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    // res.send("Logged in");

});


module.exports = router;