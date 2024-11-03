import { ErrorMessage } from '@/components/error/error-message'
import { TransactionSkeleton } from '@/components/skeleton/transaction-skeleton'
import { TransactionCard } from '@/components/transaction/transaction-card'
import { TransactionOverview } from '@/components/transaction/transaction-overview'
import { useGetTransaction } from '@/service/transaction/hooks/use-get-transactions'

export function Transaction(): JSX.Element {
    const { transactions, isPending, isFetching } = useGetTransaction()

    if (isPending || isFetching) {
        return <TransactionSkeleton />
    }

    if (!transactions) {
        return <ErrorMessage />
    }

    return (
        <div className="flex flex-col gap-6">
            <TransactionOverview transactions={transactions} />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Transactions</p>
                {transactions.map((transaction) => (
                    <TransactionCard
                        key={transaction.Id}
                        code={transaction.Code}
                        products={transaction.Products}
                        total={transaction.Total}
                    />
                ))}
            </div>
        </div>
    )
}
