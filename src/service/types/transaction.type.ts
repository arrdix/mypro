import { Product } from '@/service/types/product.type'

export interface TransactionProduct extends Product {
    Quantity: number
    Subtotal: number
}

export interface Transaction {
    Id: string
    Code: string
    Products: TransactionProduct[]
    Total: number
}
