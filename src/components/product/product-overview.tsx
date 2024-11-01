import { Button } from '@/components/ui/button'
import { currencyFormatter } from '@/utils/helper'

export function ProductOverview(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted">Overview</p>
            <div className="flex flex-col border rounded-lg p-4">
                <p className="text-xs text-muted">Stock Value</p>
                <div className="flex gap-1">
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(50000)}</p>
                </div>
            </div>
            <Button size="lg" className="mt-1">
                Create Product
            </Button>
        </div>
    )
}
