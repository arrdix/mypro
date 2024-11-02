import { Overview } from '@/components/ui/overview'
import { Product } from '@/service/product/types/product.type'
import { currencyFormatter } from '@/utils/helper'
import { useMemo } from 'react'

interface ProductOverviewProps {
    products: Product[]
}

export function ProductOverview({ products }: ProductOverviewProps): JSX.Element {
    const value = useMemo(() => {
        return products.reduce((currentValue, product) => {
            return currentValue + product.Price
        }, 0)
    }, [products])

    return (
        <Overview>
            <Overview.Body>
                <Overview.Title>Stock Value</Overview.Title>
                <Overview.Content>
                    <p className="text-sm font-bold">RP</p>
                    <p className="text-4xl font-bold">{currencyFormatter(value)}</p>
                </Overview.Content>
            </Overview.Body>
            <Overview.ActionButton>Create Product</Overview.ActionButton>
        </Overview>
    )
}
