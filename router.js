const express = require(`express`);

const transactionsController = require('./controllers/transactionsController')

const router = express.Router()

router.get('/', transactionsController.getAll)
router.post('/transactions', transactionsController.createTask)

module.exports = router;