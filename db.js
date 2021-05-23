const Pool = require("pg").Pool;
require('dotenv/config');
const pool = new Pool({
    user: process.env.POSTGRESQL_ADDON_USER,
    password:process.env.POSTGRESQL_ADDON_PASSWORD,
    database:process.env.POSTGRESQL_ADDON_DB,
    host:process.env.POSTGRESQL_ADDON_HOST,
   
});

module.exports = pool;
