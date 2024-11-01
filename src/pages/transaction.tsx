import { TransactionCard } from '@/components/transaction/transaction-card'
import { TransactionOverview } from '@/components/transaction/transaction-overview'

export function Transaction(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <TransactionOverview />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Transactions</p>
                {Array.from([1, 2, 3, 4].map((i) => <TransactionCard key={i} />))}
            </div>
        </div>
    )
}
