import { Overview } from '@/components/ui/overview'
import { currencyFormatter } from '@/utils/helper'

export function ProductOverview(): JSX.Element {
    return (
        <Overview>
            <Overview.Body>
                <Overview.Title>Stock Value</Overview.Title>
                <Overview.Content>
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(50000)}</p>
                </Overview.Content>
            </Overview.Body>
            <Overview.ActionButton>Create Product</Overview.ActionButton>
        </Overview>
    )
}
