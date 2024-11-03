import { Overview } from '@/components/ui/overview'
import { Transaction } from '@/service/transaction/types/transaction.type'
import { currencyFormatter } from '@/utils/helper'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useMemo } from 'react'
import { TransactionForm } from '@/components/transaction/transaction-form'

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
            <Sheet>
                <SheetTrigger asChild>
                    <Overview.ActionButton>Create Transaction</Overview.ActionButton>
                </SheetTrigger>
                <SheetContent side="bottom" className="flex flex-col gap-8">
                    <SheetHeader>
                        <SheetTitle>Create Transaction</SheetTitle>
                        <SheetDescription className="!mt-0">
                            Create a new transaction item
                        </SheetDescription>
                    </SheetHeader>
                    <div className="max-h-[500px] overflow-y-auto">
                        <TransactionForm />
                    </div>
                </SheetContent>
            </Sheet>
        </Overview>
    )
}
