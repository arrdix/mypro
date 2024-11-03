import { Button } from '@/components/ui/button'
import { ValidatedInput } from '@/components/ui/validated-input'
import { Product } from '@/service/product/types/product.type'
import { TransactionSchema } from '@/service/transaction/schema/transaction.schema'
import { currencyFormatter } from '@/utils/helper'
import { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

interface CustomProductSelectProps {
    index: number
    products: Product[] | undefined
    setValue: UseFormSetValue<TransactionSchema>
}

export function CustomProductSelect({
    index,
    products,
    setValue,
}: CustomProductSelectProps): JSX.Element {
    const [selectProducts, setSelectProducts] = useState<Product[] | undefined>(products)
    const [selectedProduct, setSelectedProduct] = useState<Product>()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function onSelect(product: Product): void {
        setValue(`Products.${index}.Id`, product.Id)
        setSelectedProduct(product)
        setIsOpen(false)
    }

    function onSearchProduct(keyword: string): void {
        const searchResult = products!.filter((product) => {
            const match = product.Name.toLowerCase().includes(keyword.toLowerCase())
            return match
        })

        setSelectProducts(searchResult)
    }

    function toggleSelect(): void {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col w-full mb-1 ">
            <label htmlFor="custom-select" className="text-sm">
                Product
            </label>
            <div id="custom-select" className="flex flex-col relative w-full">
                <Button variant="outline" className="justify-start" onClick={toggleSelect}>
                    {selectedProduct ? selectedProduct.Name : 'Select product'}
                </Button>
                {isOpen && (
                    <div className="flex flex-col max-h-[220px] w-full absolute bottom-0 left-0 translate-y-full border bg-background overflow-y-auto">
                        <div className="flex">
                            <ValidatedInput
                                className="px-4 focus-visible:outline-none rounded-none focus:outline-none focus-visible:ring-0"
                                placeholder="Search product..."
                                autoFocus
                                onChange={(e) => onSearchProduct(e.target.value)}
                            />
                        </div>
                        {selectProducts &&
                            selectProducts.map((product) => (
                                <Button
                                    key={product.Id}
                                    variant="ghost"
                                    className="rounded-none border-b p-0 w-full h-auto"
                                    onClick={() => onSelect(product)}
                                >
                                    <div className="flex justify-between items-center w-full bg-background hover:bg-neutral-100 p-4">
                                        <p className="font-bold">{product.Name}</p>
                                        <div className="flex gap-1">
                                            <p className="text-xxs font-bold">RP</p>
                                            <p className="text-lg font-bold">
                                                {currencyFormatter(product.Price)}
                                            </p>
                                        </div>
                                    </div>
                                </Button>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}
