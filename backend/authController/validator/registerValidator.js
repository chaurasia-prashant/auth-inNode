// Validation

const Joi = require('@hapi/joi');


const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(4).required(),
        gender: Joi.string(),
        age: Joi.number().required(),
        email: Joi.string().min(6).required().email(),
        dob: Joi.string(),
        password: Joi.string().min(6).required(),
    });


return schema.validate(data);

};

module.exports.registerValidation = registerValidation;

