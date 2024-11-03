import { api } from '@/lib/api'
import { CreateTransactionDto } from '@/service/transaction/dto/create-transaction.dto'
import { Transaction, TransactionResponse } from '@/service/transaction/types/transaction.type'
import { AxiosInstance } from 'axios'

export class TransactionApiService {
    api: AxiosInstance = api

    async getAll(): Promise<Transaction[] | null> {
        const response = await api.get<TransactionResponse>('/transaction')

        return response.data.Data
    }

    async create(dto: CreateTransactionDto): Promise<Transaction[] | null> {
        const response = await api.post<TransactionResponse>('/transaction', dto)

        return response.data.Data
    }
}
