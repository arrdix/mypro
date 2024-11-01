import z from 'zod'

export const productSchema = z.object({
    Id: z.string(),
    Name: z.string(),
    Price: z.number(),
})
export type ProductSchema = z.infer<typeof productSchema>
