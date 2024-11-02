import { ErrorMessage } from '@/components/error/error-message'
import { ProductCard } from '@/components/product/product-card'
import { ProductOverview } from '@/components/product/product-overview'
import { ProductSkeleton } from '@/components/skeleton/product-skeleton'
import { useGetProduct } from '@/service/product/hooks/use-get-product'

export function Product(): JSX.Element {
    const { products, isPending, isFetching } = useGetProduct()

    if (isPending || isFetching) {
        return <ProductSkeleton />
    }

    if (!products) {
        return <ErrorMessage />
    }

    return (
        <div className="flex flex-col gap-6">
            <ProductOverview products={products} />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Products</p>
                {products.map((product) => (
                    <ProductCard key={product.Id} name={product.Name} price={product.Price} />
                ))}
            </div>
        </div>
    )
}
