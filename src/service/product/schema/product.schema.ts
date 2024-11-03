import z from 'zod'

export const productSchema = z.object({
    Id: z.string().min(1, { message: 'Id must not be empty' }),
    Name: z.string().min(1, { message: 'Name must not be empty' }),
    Price: z
        .number({ message: 'Please provide a valid number.' })
        .min(1, { message: 'Price must not be empty' }),
})
export type ProductSchema = z.infer<typeof productSchema>

export const createProductSchema = productSchema
    .pick({
        Name: true,
        Price: true,
    })
    .extend({
        Code: z.string().min(1, { message: 'Code must not be empty' }),
    })
export type CreateProductSchema = z.infer<typeof createProductSchema>

export const updateProductSchema = productSchema
    .pick({
        Name: true,
    })
    .extend({
        Code: z.string().min(1, { message: 'Code must not be empty' }),
    })
export type UpdateProductSchema = z.infer<typeof updateProductSchema>
