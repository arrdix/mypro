import { Overview } from '@/components/ui/overview'
import { currencyFormatter } from '@/utils/helper'

export function TransactionOverview(): JSX.Element {
    return (
        <Overview>
            <Overview.Body>
                <Overview.Title>Revenue</Overview.Title>
                <Overview.Content>
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(1200000)}</p>
                </Overview.Content>
            </Overview.Body>
            <Overview.ActionButton>Create Transaction</Overview.ActionButton>
        </Overview>
    )
}
