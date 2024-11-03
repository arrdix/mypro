import { ProductApiService } from '@/service/product/api'
import { UpdateProductDto } from '@/service/product/dto/update-product.dto'
import { Product } from '@/service/product/types/product.type'
import { UseMutationReturn } from '@/service/shared/use-mutation-return.type'
import { UseMutateAsyncFunction, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export interface UseUpdateProductReturn extends UseMutationReturn {
    updateProduct: UseMutateAsyncFunction<
        Product[] | null,
        Error,
        { id: string; dto: UpdateProductDto }
    >
}

export function useUpdateProduct(): UseUpdateProductReturn {
    const api = new ProductApiService()
    const client = useQueryClient()

    const { mutateAsync: updateProduct, error } = useMutation<
        Product[] | null,
        Error,
        { id: string; dto: UpdateProductDto }
    >({
        mutationFn: ({ id, dto }) => api.update(id, dto),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['products'] })
            toast.success('Product updated.')
        },
        onMutate: () => toast.info('Updating product...'),
        onError: () => toast.error('Update product failed.'),
    })

    return { updateProduct, error }
}
