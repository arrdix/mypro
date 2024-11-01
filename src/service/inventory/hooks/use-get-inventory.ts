import { InventoryApiService } from '@/service/inventory/api'
import { Inventory } from '@/service/inventory/types/inventory.type'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export function useGetInventory(): UseQueryResult<Inventory[], Error> {
    const api = new InventoryApiService()

    return useQuery({
        queryKey: ['inventory'],
        queryFn: () => api.getAll(),
    })
}
