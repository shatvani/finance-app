function Trend({type, amount, prevAmount}) {
  const colorClasses = {
    'Income': 'text-green-700 dark:text-green-300',
    'Expense': 'text-red-700 dark:text-red-300',
    'Investment': 'text-indigo-700 dark:text-indigo-300',
    'Saving': 'text-yellow-700 dark:text-yellow-300'
  }

  const calcPercentageChange = (amount, prevAmount) => {
    if (prevAmount === 0) return amount === 0 ? 0 : 100;
    return ((amount - prevAmount) / Math.abs(prevAmount)) * 100;
  };

  const formatCurrency = (amont) => new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(amont);

  
  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {amount ? formatCurrency(amount) : formatCurrency(0)}
      </div>
    </div>
  )
}

export default Trend
