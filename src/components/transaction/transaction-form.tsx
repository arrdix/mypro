import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ValidatedInput } from '@/components/ui/validated-input'
import { Trash } from 'lucide-react'
import { useGetInventory } from '@/service/inventory/hooks/use-get-inventory'
import {
    TransactionSchema,
    transactionSchema,
} from '@/service/transaction/schema/transaction.schema'
import { CustomProductSelect } from '@/components/ui/custom-product-select'
import { useGetProduct } from '@/service/product/hooks/use-get-product'
import { useCreateTransaction } from '@/service/transaction/hooks/use-create-transaction'

interface ValidateStockParams {
    productId: string
    value: number
    index: number
}

interface AutoFillField {
    productId: string
    index: number
}

export function TransactionForm(): JSX.Element {
    const { createTransaction } = useCreateTransaction()
    const { inventory } = useGetInventory()
    const { products } = useGetProduct()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        control,
        watch,
        setError,
        clearErrors,
        getValues,
        reset,
    } = useForm<TransactionSchema>({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            Code: '',
            Products: [{ Id: '', Name: '', Price: 0, Quantity: 0, Subtotal: 0 }],
            Total: 0,
        },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'Products',
    })

    useEffect(() => {
        const watched = watch((value, { name }) => {
            if (name && name.endsWith('Subtotal')) {
                if (value.Products) {
                    const total = value.Products.reduce((currentTotal, product) => {
                        return currentTotal + (product?.Subtotal || 0)
                    }, 0)

                    setValue('Total', total)
                }
            }

            if (name && name.endsWith('Id')) {
                if (value.Products) {
                    const selected = value.Products.map((product) => product?.Id)

                    products?.filter((product) => {
                        return !selected.includes(product.Id)
                    })
                }
            }
        })

        return (): void => watched.unsubscribe()
    }, [watch, setValue, products])

    function validateStock({ productId, index, value }: ValidateStockParams): void {
        const selectedProduct = inventory?.find((pruduct) => pruduct.Id === productId)

        if (selectedProduct && value > selectedProduct.Stock) {
            setError(`Products.${index}.Quantity`, {
                message: `Qty must not be greater than ${selectedProduct.Stock}`,
            })
        } else {
            clearErrors(`Products.${index}.Quantity`)
        }
    }

    function autoFillField({ productId, index }: AutoFillField): void {
        const qty = getValues(`Products.${index}.Quantity`)
        const selectedProduct = inventory?.find((pruduct) => pruduct.Id === productId)

        if (selectedProduct) {
            setValue(`Products.${index}.Price`, selectedProduct?.Price)
            setValue(`Products.${index}.Subtotal`, qty * selectedProduct?.Price)
        }
    }

    function onSubmit(): void {
        handleSubmit(async (data) => {
            await createTransaction(data)

            reset()
        })()
    }

    return (
        <div className="flex flex-col gap-6">
            <ValidatedInput
                {...register('Code')}
                label="Code"
                error={errors.Code?.message}
                placeholder="Transaction Code"
            />

            <div className="flex flex-col gap-4">
                {fields.map((field, index) => {
                    const productId = watch(`Products.${index}.Id`)
                    autoFillField({ productId, index })

                    return (
                        <div key={field.id} className="flex flex-col">
                            <div className="flex ">
                                <CustomProductSelect
                                    index={index}
                                    products={products}
                                    setValue={setValue}
                                />
                                {fields.length > 1 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="mt-5 ml-2 text-error border-error"
                                        onClick={() => remove(index)}
                                    >
                                        <Trash />
                                    </Button>
                                )}
                            </div>
                            {productId && (
                                <div className="flex flex-col">
                                    <div className="flex items-start gap-1">
                                        <ValidatedInput
                                            type="number"
                                            label="Qty"
                                            {...register(`Products.${index}.Quantity`, {
                                                valueAsNumber: true,
                                                onChange(event) {
                                                    const value = event.target.value
                                                    validateStock({ productId, index, value })
                                                },
                                            })}
                                        />
                                        <ValidatedInput
                                            type="number"
                                            min={0}
                                            label="Price"
                                            {...register(`Products.${index}.Price`, {
                                                valueAsNumber: true,
                                            })}
                                            disabled
                                            readOnly
                                        />
                                        <ValidatedInput
                                            type="number"
                                            min={0}
                                            label="Subtotal"
                                            {...register(`Products.${index}.Subtotal`, {
                                                valueAsNumber: true,
                                            })}
                                            disabled
                                            readOnly
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-error">
                                            {errors.Products &&
                                                errors.Products[index]?.Quantity?.message}
                                        </p>
                                        <p className="text-sm text-error">
                                            {errors.Products &&
                                                errors.Products[index]?.Price?.message}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => append({ Id: '', Name: '', Price: 0, Quantity: 0, Subtotal: 0 })}
                >
                    Add More Product
                </Button>
            </div>
            <ValidatedInput {...register('Total')} label="Grand Total" readOnly disabled />

            <Button
                size="lg"
                className="w-full"
                onClick={onSubmit}
                disabled={Object.keys(errors).length > 0 || isSubmitting}
            >
                Create
            </Button>
        </div>
    )
}
