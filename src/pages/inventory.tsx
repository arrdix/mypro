import { InventoryCard } from '@/components/inventory/inventory-card'
import { InventoryOverview } from '@/components/inventory/inventory-overview'

export function Inventory(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <InventoryOverview />
            <p className="text-xs text-muted">Inventory</p>
            {Array.from([1, 2, 3, 4].map((i) => <InventoryCard key={i} />))}
        </div>
    )
}
