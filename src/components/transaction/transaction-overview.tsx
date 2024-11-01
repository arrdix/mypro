import { Button } from '@/components/ui/button'
import { currencyFormatter } from '@/utils/helper'

export function TransactionOverview(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted">Overview</p>
            <div className="flex flex-col border rounded-lg p-4">
                <p className="text-xs text-muted">Revenue</p>
                <div className="flex gap-1">
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(120000)}</p>
                </div>
            </div>
            <Button size="lg" className="mt-1">
                Create Transaction
            </Button>
        </div>
    )
}
