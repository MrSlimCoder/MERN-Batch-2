const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Todo = new Schema({
    name: String,
    list: Array,
    delete: { type: Boolean, default: false}
});

module.exports = mongoose.model('todo', Todo);