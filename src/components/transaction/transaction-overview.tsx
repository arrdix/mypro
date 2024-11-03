import { Overview } from '@/components/ui/overview'
import { currencyFormatter } from '@/utils/helper'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { CreateTransactionForm } from '@/components/transaction/create-transaction-form'

interface TransactionOverviewProps {
    revenue?: number
}

export function TransactionOverview({ revenue }: TransactionOverviewProps): JSX.Element {
    return (
        <Overview>
            <Overview.Body>
                <Overview.Title>Revenue</Overview.Title>
                <Overview.Content>
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(revenue!)}</p>
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
                        <CreateTransactionForm />
                    </div>
                </SheetContent>
            </Sheet>
        </Overview>
    )
}
