import { Product } from '@/service/product/types/product.type'

export interface Inventory extends Product {
    Stock: number
}

export interface InventoryResponse {
    Message: string
    Data: Inventory[]
}
