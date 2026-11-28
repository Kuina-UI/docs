export interface ExampleTransaction {
  id: string
  merchant: string
  category: string
  date: string
  status: 'Completed' | 'Pending' | 'Failed'
  amount: number
}

export const exampleTransactions: ExampleTransaction[] = [
  { id: 'txn-1048', merchant: 'Corner Coffee', category: 'Food & drink', date: '2026-11-24', status: 'Completed', amount: -6.75 },
  { id: 'txn-1047', merchant: 'Acme Corp', category: 'Salary', date: '2026-11-21', status: 'Completed', amount: 4850 },
  { id: 'txn-1046', merchant: 'Streamly', category: 'Subscriptions', date: '2026-11-19', status: 'Pending', amount: -11.99 },
  { id: 'txn-1045', merchant: 'Skyway Airlines', category: 'Travel', date: '2026-11-16', status: 'Failed', amount: -428.4 },
  { id: 'txn-1044', merchant: 'Fresh Market', category: 'Groceries', date: '2026-11-14', status: 'Completed', amount: -82.13 },
  { id: 'txn-1043', merchant: 'Green Bowl', category: 'Food & drink', date: '2026-11-12', status: 'Completed', amount: -15.42 },
  { id: 'txn-1042', merchant: 'Cineflix', category: 'Subscriptions', date: '2026-11-10', status: 'Completed', amount: -15.49 },
  { id: 'txn-1041', merchant: 'Pizza Palace', category: 'Food & drink', date: '2026-11-08', status: 'Completed', amount: -42.13 },
  { id: 'txn-1040', merchant: 'City Rides', category: 'Travel', date: '2026-11-06', status: 'Pending', amount: -24.6 },
  { id: 'txn-1039', merchant: 'CloudBox', category: 'Subscriptions', date: '2026-11-05', status: 'Completed', amount: -2.99 },
]

export const signedCurrencyFormat = { style: 'currency', currency: 'USD', signDisplay: 'exceptZero' } as const

export const exampleStatusColors = { Completed: 'success', Pending: 'warning', Failed: 'danger' } as const
