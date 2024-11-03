import { UseMutationReturn } from '@/service/shared/use-mutation-return.type'
import { TransactionApiService } from '@/service/transaction/api'
import { CreateTransactionDto } from '@/service/transaction/dto/create-transaction.dto'
import { Transaction } from '@/service/transaction/types/transaction.type'
import { UseMutateAsyncFunction, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export interface UseCreateTransactionReturn extends UseMutationReturn {
    createTransaction: UseMutateAsyncFunction<Transaction[] | null, Error, CreateTransactionDto>
}

export function useCreateTransaction(): UseCreateTransactionReturn {
    const api = new TransactionApiService()
    const client = useQueryClient()

    const { mutateAsync: createTransaction, error } = useMutation<
        Transaction[] | null,
        Error,
        CreateTransactionDto
    >({
        mutationFn: (dto) => api.create(dto),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['transactions'] })
            toast.success('Transaction created.')
        },
        onMutate: () => toast.info('Creating transaction...'),
        onError: () => toast.error('Create transaction failed.'),
    })

    return { createTransaction, error }
}
