import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item"

const groupAndSumTransactionsByDate = (transactions) => {
  const map = new Map();
  for (const t of transactions) {
    const date = t.created_at.slice(0, 10);
    const entry = map.get(date) ?? { transactions: [], amount: 0 };
    entry.transactions.push(t);
    entry.amount += (t.type === 'Expense' ? -t.amount : t.amount);
    map.set(date, entry);
  }
  // ha objektum kell vissza:
  //return Object.fromEntries(map.entries());
  return map.entries();
};

async function TransactionList() {
  
  const response = await fetch('http://localhost:3100/transactions', { cache: 'no-store' })

  const transactions = await response.json()

  const grouped = groupAndSumTransactionsByDate(transactions);

  return (
    <div className="space-y-8">
      {grouped
        .map(([date, { transactions, amount }]) =>
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Separator />
            <section className="space-y-4">
              {transactions.map(transaction => <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>)}
            </section>
          </div>
        )}
    </div>
  )
}

export default TransactionList
