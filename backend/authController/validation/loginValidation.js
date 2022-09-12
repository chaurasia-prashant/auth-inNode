// Validation

const Joi = require('@hapi/joi');


const loginValidation = (data) => {
    const schema = Joi.object({
        // nickName: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });


return schema.validate(data);

};

module.exports.loginValidation = loginValidation;

