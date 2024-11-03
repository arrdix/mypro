import { InventoryApiService } from '@/service/inventory/api'
import { Inventory } from '@/service/inventory/types/inventory.type'
import { create } from 'zustand'

interface InventoryStore {
    inventory: Inventory[]
    fetch: () => void
}

export const useInventoryStore = create<InventoryStore>((set) => ({
    inventory: [],
    fetch: async (): Promise<void> => {
        const api = new InventoryApiService()
        const inventory = await api.getAll()
        set({ inventory })
    },
}))
