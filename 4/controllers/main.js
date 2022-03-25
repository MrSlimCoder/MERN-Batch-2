const detail = require("../config/detail"); 

exports.get = (req, res) => {
    res.status(200).json(detail);
}

exports.post = (req, res) => {
    const data = req.body;
    detail.experience = data.experience;
    res.status(200).json(detail);
}

exports.put = (req, res) => {
    const data = req.body;
    res.status(200).json(data);
}

exports.patch = (req, res) => {
    const data = req.body;
    detail.name = data.name;
    res.status(200).json(detail);
}

exports.delete = (req, res) => {
    delete detail.age;
    res.status(200).json(detail);
}