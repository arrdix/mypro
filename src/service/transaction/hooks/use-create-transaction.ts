import { TransactionApiService } from '@/service/transaction/api'
import { CreateTransactionDto } from '@/service/transaction/dto/create-transaction.dto'
import { Transaction } from '@/service/transaction/types/transaction.type'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

export function useCreateTransaction(): UseMutationResult<
    Transaction[] | null,
    Error,
    CreateTransactionDto
> {
    const api = new TransactionApiService()

    return useMutation<Transaction[] | null, Error, CreateTransactionDto>({
        mutationFn: (dto) => api.create(dto),
    })
}
