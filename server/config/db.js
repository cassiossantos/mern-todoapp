const mongoose = require("mongoose");

mongoose
    .connect(
        process.env.DB_CONNECTION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        function() {
            console.log("DB connected with success!");
        }
    )
    .catch(function(err) {
        console.log("Error when try connect database!");
    });

module.exports = mongoose.connection;
