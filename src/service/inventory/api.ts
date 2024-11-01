import { api } from '@/lib/api'
import { Inventory, InventoryResponse } from '@/service/inventory/types/inventory.type'
import { AxiosInstance } from 'axios'

export class InventoryApiService {
    api: AxiosInstance = api

    async getAll(): Promise<Inventory[]> {
        const response = await api.get<InventoryResponse>('/inventory')

        return response.data.Data
    }
}
