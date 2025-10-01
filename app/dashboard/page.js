import { Suspense } from "react";

const { default: TransactionList } = require("./components/transaction-list");
const { default: TransactionListFallback } = require("./components/transaction-list-fallback");

function Page() {
  return (
    <>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>      
    </>
  )
}

export default Page
