import { ProductCard } from '@/components/product/product-card'
import { ProductOverview } from '@/components/product/product-overview'

export function Product(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <ProductOverview />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Products</p>
                {Array.from([1, 2, 3, 4].map((i) => <ProductCard key={i} />))}
            </div>
        </div>
    )
}
