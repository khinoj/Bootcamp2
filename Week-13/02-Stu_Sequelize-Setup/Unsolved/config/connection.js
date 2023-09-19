require('dotenv').config()
console.log(process.env)

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_name,
  process.env.DB_password,
  process.env.DB_user,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
