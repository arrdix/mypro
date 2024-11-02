import { ProductApiService } from '@/service/product/api'
import { CreateProductDto } from '@/service/product/dto/create-product.dto'
import { Product } from '@/service/product/types/product.type'
import { UseMutationReturn } from '@/service/shared/use-mutation-return.type'
import { UseMutateAsyncFunction, useMutation, useQueryClient } from '@tanstack/react-query'

export interface UseCreateProductReturn extends UseMutationReturn {
    createProduct: UseMutateAsyncFunction<Product[] | null, Error, CreateProductDto>
}

export function useCreateProduct(): UseCreateProductReturn {
    const api = new ProductApiService()
    const client = useQueryClient()

    const { mutateAsync: createProduct, error } = useMutation<
        Product[] | null,
        Error,
        CreateProductDto
    >({
        mutationFn: (dto) => api.create(dto),
        onSuccess: () => client.invalidateQueries({ queryKey: ['products'] }),
    })

    return { createProduct, error }
}
