import Button from "@/components/button"
import PageHeader from "@/components/page-header"
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from '@/components/transaction-summary-item'
import Trend from "@/components/trend"

function Page() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800"/>
        <div><PageHeader /></div>        
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expense" amount={12000} prevAmount={10000} />
          <Trend type="Investment" amount={7000} prevAmount={11100} />
          <Trend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
          <TransactionItem type="Saving" description="For children" amount={500} />
          <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionSummeryItem + TransactionItem</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800"/>
        <div className="space-y-4">
          <TransactionSummaryItem date="2024-05-01" amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <TransactionItem type="Income" category="Salary" description="Monthly Salary" amount={500000} date="2023-10-01" />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={2900} date="2023-10-01" />
          <TransactionItem type="Saving" category="For children" description="Monthly Salary" amount={10000} date="2023-10-01" />
          <TransactionItem type="Investment" description="Udemy" amount={4000} date="2023-10-01" />
        </div>
      </div>

            <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800"/>
        <div className="space-x-4">
          <Button>Click me!</Button>
          <Button variant="outline">Click me!</Button>
          <Button variant="ghost">Click me!</Button>

          <Button size="xs">Click me!</Button>
          <Button size="sm">Click me!</Button>
          <Button size="lg">Click me!</Button>
        </div>
      </div>
      
    </main>
  )
}

export default Page
