const User = require("../models/User");

exports.get = (req, res) => {
    const data = req.body;
    data.delete = false;
    User.findOne(data, (err, user) => {
        if (err) {
            res.status(500).json(err);
        } else if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    })
}

exports.post = (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save();
    res.status(200).json(user);
}

exports.put = (req, res) => {
    const fullName = req.body.fullName;
    const newData = req.body.newData;
    User.findOneAndUpdate({ fullName }, newData, { new: true }, (err, user) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(user);
        }
    });
}

exports.patch = (req, res) => {
    const data = req.body;
    User.findOneAndUpdate(data, {
        age: 30
    }, { new: true }, (err, user) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(user);
        }
    });
}

exports.delete = (req, res) => {
    const data = req.body;
    User.findOneAndUpdate(data, {
        delete: true
    }, { new: true }, (err, user) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(user);
        }
    });
}