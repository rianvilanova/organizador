const connection = require('./connection')

const getAll = () => {
    const transactions = connection.execute('SELECT * FROM transactions')
}

const createTransaction = async (transaction) => {
    const { name, description, amount, type, date } = transaction
    const sql = `INSERT INTO transactions (name, description, amount, type, date)
    VALUES (?, ?, ?, ?, ?)`

    const [createdTransaction] = await connection.execute(sql, [name, description || null, amount, type, date])

    return {insertId: createdTransaction.insertId}

}

module.exports = {
    getAll
}