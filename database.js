const mongoose = require("mongoose");

var uri = process.env.BD_URL;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;

// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });

const schima = mongoose.Schema

const schim = new schima({
    name: { type: String },
    family: { type: String},
})

const model = mongoose.model("modelName",schim)
module.exports = model