const connection = require('./connection')

const getAll = () => {
    const transactions = connection.execute('SELECT * FROM transactions')
}