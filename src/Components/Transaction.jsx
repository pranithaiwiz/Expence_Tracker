import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDelete = () => {
    console.log('Deleting transaction:', transaction.id);
    deleteTransaction(transaction.id);
  };

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={handleDelete} className="delete-btn" aria-label="Delete transaction">x</button>
    </li>
  );
};
export default Transaction;
