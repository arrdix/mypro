import { productSchema } from '@/service/product/schema/product.schema'
import { z } from 'zod'

export const transactionProductSchema = productSchema.extend({
    Quantity: z
        .number({ message: 'Please provide a valid number.' })
        .min(1, { message: 'Quantity must not be empty' }),
    Subtotal: z.number(),
})
export type TransactionProductSchema = z.infer<typeof transactionProductSchema>

export const transactionSchema = z.object({
    Code: z.string().min(1, { message: 'Code must not be empty.' }),
    Products: z.array(transactionProductSchema, { message: 'Please select at least 1 product.' }),
    Total: z.number(),
})
export type TransactionSchema = z.infer<typeof transactionSchema>
