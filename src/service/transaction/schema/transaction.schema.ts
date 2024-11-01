import { productSchema } from '@/service/product/schema/product.schema'
import { z } from 'zod'

export const transactionProductSchema = productSchema.extend({
    Quantity: z.number(),
    Subtotal: z.number(),
})
export type TransactionProductSchema = z.infer<typeof transactionProductSchema>

export const transactionSchema = z.object({
    Id: z.string(),
    Code: z.string(),
    Products: z.array(transactionProductSchema),
    Total: z.number(),
})
export type TransactionSchema = z.infer<typeof transactionSchema>
