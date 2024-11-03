import z from 'zod'

export const productSchema = z.object({
    Id: z.string().min(1, { message: 'Id must not be empty' }),
    Name: z.string().optional(),
    Price: z
        .number({ message: 'Please provide a valid number.' })
        .min(1, { message: 'Price must not be empty' }),
})
export type ProductSchema = z.infer<typeof productSchema>
