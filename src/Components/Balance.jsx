import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc+= item),0).toFixed(2);
  return (
    <>
        <h3>Balance</h3>
        <h3 id='Money'>${total}</h3>
    </>

  )
}

export default Balance 