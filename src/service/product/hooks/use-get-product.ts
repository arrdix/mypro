import { ProductApiService } from '@/service/product/api'
import { Product } from '@/service/product/types/product.type'
import { UseQueryReturn } from '@/service/shared/use-query-return.type'
import { useQuery } from '@tanstack/react-query'

interface UseGetProductReturn extends UseQueryReturn {
    products?: Product[]
}

export function useGetProduct(): UseGetProductReturn {
    const api = new ProductApiService()

    const {
        data: products,
        error,
        isPending,
        isFetching,
    } = useQuery({
        queryKey: ['products'],
        queryFn: () => api.getAll(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    })

    return { products, error, isPending, isFetching }
}
