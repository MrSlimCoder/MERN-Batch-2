const bodyParser = require("body-parser");
const morgan = require("morgan");

module.exports = {
    morgan: () => morgan("tiny"),
    bodyParser: () => bodyParser.json(),
}