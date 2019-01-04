const Sequelize = require('sequelize');
const { username, password } = require('./config.js');

// {
//   host     : ,
//   user     : ,
//   password : ,
//   port     : process.env.RDS_PORT
// }

const db = new Sequelize('qa', process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT
});

module.exports = db;
