const express = require(`express`);

const transactionsController = require('./controllers/transactionsController')

const router = express.Router()

router.get('/transactions', transactionsController.getAll)
router.post('/transactions', transactionsController.createTransaction)

module.exports = router;