const connection = require('./connection')

const getAll = () => {
    const transactions = connection.execute('SELECT * FROM transactions')
    return transactions;
}

const createTransaction = async (transaction) => {
    const { name, description, amount, type, date } = transaction

    const sql = `INSERT INTO transactions (name, description, amount, type, date)
    VALUES (?, ?, ?, ?, ?)`

    const dataMysql = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

    const [createdTransaction] = await connection.execute(sql, [name, description || "Sem descrição", amount, type, date || dataMysql])

    return { insertId: createdTransaction.insertId }

}

module.exports = {
    getAll,
    createTransaction
}