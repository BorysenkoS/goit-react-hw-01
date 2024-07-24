import css from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead className={css.transactionData}>
        <tr>
          <th className={css.transactionType}>Type</th>
          <th className={css.transactionType}>Amount</th>
          <th className={css.transactionType}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.transactionItem}>{item.type}</td>
              <td className={css.transactionItem}>{item.amount}</td>
              <td className={css.transactionItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
