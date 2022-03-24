const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

const PORT = 4000;

let myDetails = {
    name: "Vivek",
    lastName: "Anand",
    age: "25"
}

// SUPPOSE myDetails is an object which we get from Database

app.get("/", (req, res) => {
    res.status(200).json(myDetails);
});

app.post("/", (req, res) => {
    const data = req.body;
    myDetails.experience = data.experience;
    res.status(200).json(myDetails);
});

app.put("/", (req, res) => {
    const data = req.body;
    res.status(200).json(data);
});

app.patch("/", (req, res) => {
    const data = req.body;
    myDetails.name = data.name;
    res.status(200).json(myDetails);
});

app.delete("/", (req, res) => {
    delete myDetails.age;
    res.status(200).json(myDetails);
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log("Server is running");
})