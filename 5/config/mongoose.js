const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/MERN_Stack_2',(err) => {
    if(err) console.log(err);
    else console.log("Connected to MongoDB");
});