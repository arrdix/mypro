import { Overview } from '@/components/ui/overview'
import { Transaction } from '@/service/transaction/types/transaction.type'
import { currencyFormatter } from '@/utils/helper'
import { useMemo } from 'react'

interface TransactionOverviewProps {
    transactions: Transaction[]
}

export function TransactionOverview({ transactions }: TransactionOverviewProps): JSX.Element {
    const revenue = useMemo(() => {
        return transactions.reduce((currentRevenue, transaction) => {
            return currentRevenue + transaction.Total
        }, 0)
    }, [transactions])

    return (
        <Overview>
            <Overview.Body>
                <Overview.Title>Revenue</Overview.Title>
                <Overview.Content>
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(revenue)}</p>
                </Overview.Content>
            </Overview.Body>
            <Overview.ActionButton>Create Transaction</Overview.ActionButton>
        </Overview>
    )
}
