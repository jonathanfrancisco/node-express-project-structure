const mongoose = require('mongoose');
const config = require('../config');

mongoose.connection.once('open', () => {
  console.log('successfully connected to the database!');
});
mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
module.exports = async () => {
  await mongoose.connect(config.database.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
