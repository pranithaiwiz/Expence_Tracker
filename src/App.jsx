import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
import AddNewTrans from './Components/AddNewTrans'
import { GlobalProvider } from './context/GlobalState'
function App() {


  return (
    <>
      <GlobalProvider>
        <Header />
        <div>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddNewTrans />
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
