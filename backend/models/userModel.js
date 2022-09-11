const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        min: 4
    },
    nickName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 4,
        max:10
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    dob:{
        type:Date,
        default:Date.now
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 1024
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;