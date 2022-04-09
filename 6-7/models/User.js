const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    fullName: String,
    age: Number,
    delete: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', User);