const mysql = require(`mysql2/promise`)

console.log(process.env.MYSQL_HOST)
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err)
  } else {
    console.log("Conectado ao MySQL")
  }
})

module.exports = connection;