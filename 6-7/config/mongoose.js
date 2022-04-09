const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI,(err) => {
    if(err) console.log(err);
    else console.log("Connected to MongoDB");
});