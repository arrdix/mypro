import { productSchema } from '@/service/schema/product.schema'
import { z } from 'zod'

export const inventorySchema = productSchema.extend({
    Stock: z.number(),
})
