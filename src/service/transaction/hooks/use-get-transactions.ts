import { TransactionApiService } from '@/service/transaction/api'
import { Transaction } from '@/service/transaction/types/transaction.type'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export function useGetTransaction(): UseQueryResult<Transaction[], Error> {
    const api = new TransactionApiService()

    return useQuery({
        queryKey: ['transactions'],
        queryFn: () => api.getAll(),
    })
}
