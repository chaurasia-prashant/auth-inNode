const router = require('express').Router();
const User = require('../models/userModel');
const {registerValidation} = require('../authController/validation/registerValidation')


router.post('/register', async (req, res) => {

    // Validating data before creating user
    const validation = registerValidation(req.body);

    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    const user = new User({
        username: req.body.username,
        nickName: req.body.nickName,
        gender: req.body.gender,
        age: Number(req.body.age),
        email: req.body.email,
        dob: Date.parse(req.body.dob),
        password: req.body.password

    });

    // const savedUser = await user.save()
    // .then(() => res.json('User Created'))
    // .catch(err => res.status(400).json('Error: ' + err));

    try {

        const savedUser = await user.save();
        res.send(savedUser);

    } catch (err) {
        res.status(400).send(err);
    }
});


// router.post('/login')



module.exports = router;