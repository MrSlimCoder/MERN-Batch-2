const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    fullName: String,
    age: String,
});

module.exports = mongoose.model('user', User);