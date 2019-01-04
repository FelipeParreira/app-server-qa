const Sequelize = require('sequelize');
const { username, password } = require('./config.js');

const db = new Sequelize('qa', username, password, {
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  host: 'traveltipsterqa.cnjuym9u33r0.us-west-1.rds.amazonaws.com',
});

module.exports = db;
