import { CreateProductForm } from '@/components/product/create-product-form'
import { Overview } from '@/components/ui/overview'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
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
            <Sheet>
                <SheetTrigger asChild>
                    <Overview.ActionButton>Create Product</Overview.ActionButton>
                </SheetTrigger>
                <SheetContent side="bottom" className="flex flex-col gap-8">
                    <SheetHeader>
                        <SheetTitle>Create Product</SheetTitle>
                        <SheetDescription className="!mt-0">
                            Create a new product item
                        </SheetDescription>
                    </SheetHeader>
                    <div className="max-h-[500px] overflow-y-auto">
                        <CreateProductForm />
                    </div>
                </SheetContent>
            </Sheet>
        </Overview>
    )
}
