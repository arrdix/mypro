import { z } from 'zod'

export const createTransactionProductDto = z.object({
    Id: z.string(),
    Quantity: z.number(),
    Price: z.number(),
    Subtotal: z.number(),
})
export type CreateTransactionProductDto = z.infer<typeof createTransactionProductDto>

export const createTransactionDto = z.object({
    Code: z.string(),
    Products: z.array(createTransactionProductDto),
})
export type CreateTransactionDto = z.infer<typeof createTransactionDto>
