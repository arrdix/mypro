import { InventoryApiService } from '@/service/inventory/api'
import { Inventory } from '@/service/inventory/types/inventory.type'
import { UseQueryReturn } from '@/service/shared/use-query-return.type'
import { useQuery } from '@tanstack/react-query'

export interface UseGetInventoryReturn extends UseQueryReturn {
    inventory?: Inventory[]
}

export function useGetInventory(): UseGetInventoryReturn {
    const api = new InventoryApiService()

    const {
        data: inventory,
        error,
        isPending,
        isFetching,
    } = useQuery({
        queryKey: ['inventory'],
        queryFn: () => api.getAll(),
    })

    return { inventory, error, isPending, isFetching }
}
