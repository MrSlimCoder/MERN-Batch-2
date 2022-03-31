const User = require("../models/User");

exports.get = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
}

exports.post = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}