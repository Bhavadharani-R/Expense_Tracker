const { addexpense, getExpense, deleteExpense } = require('../controllers/expense');
const {addIncome, getIncomes, deleteincome} = require('../controllers/income');
const router = require('express').Router()



router.post('/add-income/:email', addIncome)
  .get('/get-incomes/:email', getIncomes )
  .delete('/delete-income/:id', deleteincome)
  .post('/add-expense/:email', addexpense)
  .get('/get-expenses/:email', getExpense)
  .delete('/delete-expense/:id', deleteExpense)


module.exports=router;