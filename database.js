const mongoose = require("mongoose");

var uri = process.env.BD_URL;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;

// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });

const schima = mongoose.Schema

const schim = new schima({
    name: { type: String, default: 'ali' },
    famili: { type: String, default: 'arij'  },
})

const model = mongoose.model("modelName",schim)
module.exports = model