import { ErrorMessage } from '@/components/error/error-message'
import { ProductCard } from '@/components/product/product-card'
import { ProductOverview } from '@/components/product/product-overview'
import { ProductSkeleton } from '@/components/skeleton/product-skeleton'
import { useGetProduct } from '@/service/product/hooks/use-get-product'
import { useMemo } from 'react'

function Product(): JSX.Element {
    const { products, isPending, isFetching } = useGetProduct()

    const stockValue = useMemo(() => {
        if (products) {
            return products.reduce((currentValue, product) => {
                return currentValue + product.Price
            }, 0)
        }
    }, [products])

    if (isPending || isFetching) {
        return <ProductSkeleton />
    }

    if (!products) {
        return <ErrorMessage />
    }

    return (
        <div className="flex flex-col gap-6">
            <ProductOverview stockValue={stockValue} />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Products</p>
                {products.map((product) => (
                    <ProductCard
                        key={product.Id}
                        id={product.Id}
                        name={product.Name}
                        price={product.Price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Product
