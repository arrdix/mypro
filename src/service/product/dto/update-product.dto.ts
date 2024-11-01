import { z } from 'zod'

export const updateProductDto = z.object({
    Code: z.string(),
    Name: z.string(),
})
export type UpdateProductDto = z.infer<typeof updateProductDto>
