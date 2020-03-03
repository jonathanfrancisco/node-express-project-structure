require('dotenv').config();

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    db_url: process.env.DB_URL
  }
};
