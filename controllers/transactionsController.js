const transactionsModel = require(`../models/transactionsModel`)

const getAll = async (_request, response) => {
    const [data] = await transactionsModel.getAll()
    return response.status(200).json(data);
}

const createTransaction = async (request, response) => {
    console.log(request.body)
    const createdTransaction = await transactionsModel.createTransaction(request.body);
    return response.status(201).json(createdTransaction);
}

module.exports = {
    getAll,
    createTransaction
}