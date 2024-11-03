import { ProductApiService } from '@/service/product/api'
import { Product } from '@/service/product/types/product.type'
import { UseMutationReturn } from '@/service/shared/use-mutation-return.type'
import { UseMutateAsyncFunction, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export interface UseDeleteProductReturn extends UseMutationReturn {
    deleteProduct: UseMutateAsyncFunction<Product[] | null, Error, { id: string }>
}

export function useDeleteProduct(): UseDeleteProductReturn {
    const api = new ProductApiService()
    const client = useQueryClient()

    const { mutateAsync: deleteProduct, error } = useMutation<
        Product[] | null,
        Error,
        { id: string }
    >({
        mutationFn: ({ id }) => api.delete(id),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['products'] })
            toast.success('Product deleted.')
        },
        onMutate: () => toast.info('Deleting product...'),
        onError: () => toast.error('Delete product failed.'),
    })

    return { deleteProduct, error }
}
