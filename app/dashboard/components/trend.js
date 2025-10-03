import BaseTrend from "@/components/trend"

async function Trend({type}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trends/${type}`)
  const { amount, prevAmount } = await response.json()
  return <BaseTrend amount={amount} prevAmount={prevAmount} type={type} />
}

export default Trend
