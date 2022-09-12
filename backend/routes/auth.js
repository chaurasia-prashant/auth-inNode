const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// require('dotenv').config();
const {registerValidation} = require('../authController/validation/registerValidation')
const {loginValidation} = require('../authController/validation/loginValidation')

router.post('/register', async (req, res) => {

    // Validating data before creating user
    const validation = registerValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    // Checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email already exist');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        username: req.body.username,
        nickName: req.body.nickName,
        gender: req.body.gender,
        age: Number(req.body.age),
        email: req.body.email,
        dob: Date.parse(req.body.dob),
        password: hashedPassword

    });

    // const savedUser = await user.save()
    // .then(() => res.json('User Created'))
    // .catch(err => res.status(400).json('Error: ' + err));

    try {

        const savedUser = await user.save();
        res.send({user: user.id});

    } catch (err) {
        res.status(400).send(err);
    }
});


// Login
router.post('/login', async(req,res)=>{

    const validation = loginValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    // Checking if the user is exist
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Not a register Email');

    // check for correct password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('worng password');

    // Create and assign a token
    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    // res.send("Logged in");

});


module.exports = router;


















// {
// 	"username": "aryan",
// 	"nickName": "jarvisg",
// 	"gender": "Male",
// 	"age": 19,
// 	"email": "mailid01@gmail.com",
// 	"dob": "2022-09-02T12:41:40.194Z",
// 	"password": "loveislife"
// }