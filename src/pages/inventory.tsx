import { ErrorMessage } from '@/components/error/error-message'
import { InventoryCard } from '@/components/inventory/inventory-card'
import { InventoryOverview } from '@/components/inventory/inventory-overview'
import { InventorySkeleton } from '@/components/skeleton/inventory-skeleton'
import { useGetInventory } from '@/service/inventory/hooks/use-get-inventory'

export function Inventory(): JSX.Element {
    const { inventory, isPending, isFetching } = useGetInventory()

    if (isPending || isFetching) {
        return <InventorySkeleton />
    }

    if (!inventory) {
        return <ErrorMessage />
    }

    return (
        <div className="flex flex-col gap-6">
            <InventoryOverview inventory={inventory} />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Inventory</p>
                {inventory.map((product) => (
                    <InventoryCard
                        key={product.Id}
                        name={product.Name}
                        price={product.Price}
                        stock={product.Stock}
                    />
                ))}
            </div>
        </div>
    )
}
