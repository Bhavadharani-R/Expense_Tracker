const Income = require("../models/IncomeModel")
exports.addIncome = async (req,res) => {

  const {email,title, amount, category, description, date} = req.body

  const income = Income({
    email,
    title,
    amount,
    category,
    description,
    date
})

try {
    if(!title || !category || !description || !date){
        return res.status(400).json({message: 'All fields are required!'})
    }
    if(amount <=0 || !amount === 'number'){
        return res.status(400).json({message: 'Amount must be a positive number'})
    }
    await income.save()
    res.status(200).json({message: 'Income Added'})
} catch (error) {
    res.status(500).json({message: 'Server Error'})
    
}
}

exports.getIncomes = async (req,res) =>{
    try {
        const {email} = req.params;
        const incomes = await Income.find({email: email}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteincome = async (req,res) =>{
   const {id} = req.params;
   Income.findByIdAndDelete(id)
   .then((income)=>{
    res.status(200).json({message: 'Income deleted'})
   })
   .catch((err)=>{
    res.status(500).json({message: 'server error'})
   })
}

