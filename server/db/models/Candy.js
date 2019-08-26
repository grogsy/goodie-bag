const Sequelize = require("sequelize");
const db = require("../database");

const Candy = db.define("candy", {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    // don't know if this is an actual thing or not
    allowEmpty: false
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    allowEmpty: false
  },

  quantity: {
    type: Sequelize.INTEGER
  },

  imageUrl: {
    type: Sequelize.STRING
  }
});

Candy.beforeValidate(instance => {
  if (instance.quantity) {
    if (instance.quantity > 10) {
      instance.quantity = 10;
    } else if (instance.quantity < 0) {
      instance.quantity = 0;
    }
  }
});

module.exports = Candy;
