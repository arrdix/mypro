import { UseQueryReturn } from '@/service/shared/use-query-return.type'
import { TransactionApiService } from '@/service/transaction/api'
import { Transaction } from '@/service/transaction/types/transaction.type'
import { useQuery } from '@tanstack/react-query'

export interface UseGetTransactionReturn extends UseQueryReturn {
    transactions?: Transaction[] | null
}

export function useGetTransaction(): UseGetTransactionReturn {
    const api = new TransactionApiService()

    const {
        data: transactions,
        error,
        isPending,
        isFetching,
    } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => api.getAll(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    })

    return { transactions, error, isPending, isFetching }
}
