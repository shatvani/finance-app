import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item"
import { supabase } from '@/lib/supabase/server';

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
  return Object.fromEntries(map.entries());
};

async function TransactionList() {
  
  const {data: transactions, error} = await supabase
  .from('transactions')
  .select('*')
  .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  
  if (!transactions || transactions.length === 0) {
    return <div className="text-center text-muted-foreground">No transactions found.</div>
  }

  const grouped = groupAndSumTransactionsByDate(transactions);

  return (
    <div className="space-y-8">
      {Object.entries(grouped)
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
