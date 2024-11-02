export interface Product {
    Id: string
    Name: string
    Price: number
}

export interface ProductResponse {
    Message: string
    Data: Product[] | null
}
