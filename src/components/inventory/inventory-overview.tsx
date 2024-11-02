import { Overview } from '@/components/ui/overview'
import { Separator } from '@/components/ui/separator'
import { Inventory } from '@/service/inventory/types/inventory.type'
import { useMemo } from 'react'

interface InventoryOverviewProps {
    inventory: Inventory[]
}

export function InventoryOverview({ inventory }: InventoryOverviewProps): JSX.Element {
    const stocks = useMemo(() => {
        return inventory.reduce((currentStock, product) => {
            return currentStock + product.Stock
        }, 0)
    }, [inventory])

    return (
        <Overview>
            <Overview.Body>
                <Overview.Content>
                    <div className="flex flex-1 flex-col gap-1 items-center">
                        <p className="text-xs text-muted">Product(s)</p>
                        <p className="text-4xl font-bold">{inventory.length}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-1 flex-col gap-1 items-center">
                        <p className="text-xs text-muted">Stock(s)</p>
                        <p className="text-4xl font-bold">{stocks}</p>
                    </div>
                </Overview.Content>
            </Overview.Body>
        </Overview>
    )
}
