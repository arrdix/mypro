import { ProductApiService } from '@/service/product/api'
import { UpdateProductDto } from '@/service/product/dto/update-product.dto'
import { Product } from '@/service/product/types/product.type'
import { UseMutationReturn } from '@/service/shared/use-mutation-return.type'
import { UseMutateAsyncFunction, useMutation, useQueryClient } from '@tanstack/react-query'

export interface UseUpdateProductReturn extends UseMutationReturn {
    updateProduct: UseMutateAsyncFunction<Product[] | null, Error, UpdateProductDto>
}

export function useUpdateProduct(): UseUpdateProductReturn {
    const api = new ProductApiService()
    const client = useQueryClient()

    const { mutateAsync: updateProduct, error } = useMutation<
        Product[] | null,
        Error,
        UpdateProductDto
    >({
        mutationFn: (dto) => api.update(dto),
        onSuccess: () => client.invalidateQueries({ queryKey: ['products'] }),
    })

    return { updateProduct, error }
}
