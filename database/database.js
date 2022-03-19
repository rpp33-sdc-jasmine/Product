const {Pool} = require('pg');
const {key} = require('../config.js')
const pool = new Pool({
  user:'root',
  host: 'localhost',
  database: 'sdc',
  password: key,
  port: 5432,
});

