import { ErrorMessage } from '@/components/error/error-message'
import { InventoryCard } from '@/components/inventory/inventory-card'
import { InventoryOverview } from '@/components/inventory/inventory-overview'
import { InventorySkeleton } from '@/components/skeleton/inventory-skeleton'
import { useGetInventory } from '@/service/inventory/hooks/use-get-inventory'
import { useMemo } from 'react'

function Inventory(): JSX.Element {
    const { inventory, isPending, isFetching } = useGetInventory()

    const totalStocks = useMemo(() => {
        if (inventory) {
            return inventory.reduce((currentStock, product) => {
                return currentStock + product.Stock
            }, 0)
        }
    }, [inventory])

    if (isPending || isFetching) {
        return <InventorySkeleton />
    }

    if (!inventory) {
        return <ErrorMessage />
    }

    return (
        <div className="flex flex-col gap-6">
            <InventoryOverview totalStock={totalStocks} totalProduct={inventory.length} />
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

export default Inventory
