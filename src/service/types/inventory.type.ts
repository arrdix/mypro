import { Product } from '@/service/types/product.type'

export interface Inventory extends Product {
    Stock: number
}
