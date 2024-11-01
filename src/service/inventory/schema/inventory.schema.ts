import { productSchema } from '@/service/product/schema/product.schema'
import { z } from 'zod'

export const inventorySchema = productSchema.extend({
    Stock: z.number(),
})
