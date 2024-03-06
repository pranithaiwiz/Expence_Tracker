import React, {useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item=> item > 0).reduce((acc, items) => (acc += items),0).toFixed(2);
  const expense = (amounts.filter(item =>item <= 0).reduce((acc, items) => (acc += items),0) * -1).toFixed(2);
  return (
    <>
    <div>
        <h4>Income</h4>
        <p id='Money-increment' className='moneyPlus'>+${income}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id='Money-decrement' className='moneyMinus'>-${expense}</p>
    </div>
    </>
  )
}

export default IncomeExpenses