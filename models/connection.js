const mysql = require(`mysql2`)

const connection = mysql.createPool({
    host: process.env.MYLSQL_HOST,
    user: process.env.MYLSQL_USER,
    password: process.env.MYLSQL_PASSWORD,
    database: process.env.MYLSQL_DB
})

module.exports = connection;