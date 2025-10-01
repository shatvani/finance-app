// __tests__/groupAndSumTransactionByDate.test.js
const groupAndSumTransactionByDate = require('transaction-list');

describe('groupAndSumTransactionByDate', () => {
  test('üres input -> üres output', () => {
    expect(groupAndSumTransactionByDate([])).toEqual([]);
  });

  test('egyetlen tranzakció', () => {
    const txs = [{ date: '2025-09-01', type: 'Income', amount: 100 }];
    expect(groupAndSumTransactionByDate(txs)).toEqual([
      { date: '2025-09-01', amount: 100 },
    ]);
  });

  test('azonos dátum összeadódik', () => {
    const txs = [
      { date: '2025-09-01', type: 'Income', amount: 100 },
      { date: '2025-09-01', type: 'Income', amount: 50 },
    ];
    const result = groupAndSumTransactionByDate(txs);
    expect(result).toEqual([{ date: '2025-09-01', amount: 150 }]);
  });

  test('Expense negatívként számít', () => {
    const txs = [
      { date: '2025-09-02', type: 'Income', amount: 200 },
      { date: '2025-09-02', type: 'Expense', amount: 80 },
    ];
    expect(groupAndSumTransactionByDate(txs)).toEqual([
      { date: '2025-09-02', amount: 120 },
    ]);
  });

  test('több dátum', () => {
    const txs = [
      { date: '2025-09-01', type: 'Income', amount: 100 },
      { date: '2025-09-01', type: 'Expense', amount: 40 },
      { date: '2025-09-02', type: 'Income', amount: 10 },
    ];
    const res = groupAndSumTransactionByDate(txs).sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    expect(res).toEqual([
      { date: '2025-09-01', amount: 60 },
      { date: '2025-09-02', amount: 10 },
    ]);
  });

  test('immutability: input nem változik', () => {
    const original = [
      { date: '2025-09-01', type: 'Income', amount: 1 },
      { date: '2025-09-01', type: 'Expense', amount: 1 },
    ];
    const copy = JSON.parse(JSON.stringify(original));
    groupAndSumTransactionByDate(original);
    expect(original).toEqual(copy);
  });

  test('lebegőpontos összeadás', () => {
    const txs = [
      { date: '2025-09-03', type: 'Income', amount: 0.1 },
      { date: '2025-09-03', type: 'Income', amount: 0.2 },
    ];
    const [row] = groupAndSumTransactionByDate(txs);
    expect(row.date).toBe('2025-09-03');
    expect(row.amount).toBeCloseTo(0.3, 10);
  });
});