import Trend from "./components/trend";
import { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import TrendFallback from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import { ErrorBoundary } from "react-error-boundary";
import { types } from "@/lib/consts";

async function Page() {

  return (<div className="space-y-8">
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Summery</h1>
      </section>
      
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {types.map(type => <ErrorBoundary key={type} fallback={<div className="text-red-500">Cannot fetch {type} trend data</div>}>
          <Suspense fallback={<TrendFallback />}>
            <Trend type={type} />
          </Suspense>
        </ErrorBoundary>)}
      </section>

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-2xl">Transactions</h2>
        <Link href="/dashboard/transaction/add" className={`flex items-center space-x-1 ${variants['outline']} ${sizes['sm']}`}>
          <PlusCircle className="w-4 h-4" />
          <div>Add</div>
        </Link>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>      
    </div>
  )
}

export default Page
