import { api } from '@/lib/api'
import { CreateProductDto } from '@/service/product/dto/create-product.dto'
import { UpdateProductDto } from '@/service/product/dto/update-product.dto'
import { Product, ProductResponse } from '@/service/product/types/product.type'
import { AxiosInstance } from 'axios'

export class ProductApiService {
    api: AxiosInstance = api

    async getAll(): Promise<Product[]> {
        const response = await api.get<ProductResponse>('/product')

        return response.data.Data!
    }

    async create(dto: CreateProductDto): Promise<Product[] | null> {
        const response = await api.post<ProductResponse>('/product', dto)

        return response.data.Data
    }

    async update(dto: UpdateProductDto): Promise<Product[] | null> {
        const response = await api.put<ProductResponse>('/product', dto)

        return response.data.Data
    }
}
