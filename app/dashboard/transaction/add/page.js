import TransactionForm from "../../components/transaction-form";

export const metadata = {
  title: "Add Transaction", hu: "Tranzakció hozzáadás"
};

function Page() {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Add Transaction</h1>
      <TransactionForm />
    </>
  )
}

export default Page
