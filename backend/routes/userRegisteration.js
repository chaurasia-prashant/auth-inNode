const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidation } = require('../authController/validator/registerValidator')

router.post('/register', async (req, res) => {

    // Validating data before creating user
    const validation = registerValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    // Checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already exist');


    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        gender: req.body.gender,

        email: req.body.email,
        dob: Date.parse(req.body.dob),
        password: hashedPassword

    });

    // const savedUser = await user.save()
    // .then(() => res.json('User Created'))
    // .catch(err => res.status(400).json('Error: ' + err));

    try {

        const savedUser = await user.save();
        res.send({ user: user.id });

    } catch (err) {
        res.status(400).send(err);
    }
});




module.exports = router;


















// {
// 	"username": "aryan",
// 	"gender": "Male",
// 	"age": 19,
// 	"email": "mailid01@gmail.com",
// 	"dob": "2022-09-02T12:41:40.194Z",
// 	"password": "loveislife"
// }