import PageHeader from "@/components/page-header"
import TransactionItem from "@/components/transaction-item"

function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800"/>
        <div><PageHeader /></div>
        
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800"/>
        <div className="space-y-4">
          <TransactionItem type="Income" category="Salary" description="Monthly Salary" amount={500000} date="2023-10-01" />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={2900} date="2023-10-01" />
          <TransactionItem type="Saving" category="For children" description="Monthly Salary" amount={10000} date="2023-10-01" />
          <TransactionItem type="Investment" description="Udemy" amount={4000} date="2023-10-01" />
        </div>
      </div>
    </main>
  )
}

export default Page
