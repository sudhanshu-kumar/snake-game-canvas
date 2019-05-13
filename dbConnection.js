/* eslint-disable no-return-await */
/* eslint-disable no-console */
const mongoose = require('mongoose');

const getDBConnection = async () => {
  await mongoose.connect('mongodb://localhost/snake-game', {
    useNewUrlParser: true,
  });
};

module.exports = { getDBConnection };
