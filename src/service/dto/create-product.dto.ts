import { z } from 'zod'

export const createProductDto = z.object({
    Code: z.string(),
    Name: z.string(),
    Price: z.number(),
})
export type CreateProductDto = z.infer<typeof createProductDto>
