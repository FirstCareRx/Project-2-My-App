// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
const Foods = sequelize.define("foods", {
  id: Sequelize.INT,
  food: Sequelize.STRING,
  category: Sequelize.STRING,
  price: Sequelize.DATE,
  region: Sequelize.STRING
});

// Syncs with DB
Foods.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Foods;