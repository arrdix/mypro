import { Button } from '@/components/ui/button'
import { ValidatedInput } from '@/components/ui/validated-input'
import { useCreateProduct } from '@/service/product/hooks/use-create-product'
import { CreateProductSchema, createProductSchema } from '@/service/product/schema/product.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function CreateProductForm(): JSX.Element {
    const { createProduct } = useCreateProduct()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CreateProductSchema>({
        resolver: zodResolver(createProductSchema),
        defaultValues: { Code: '', Name: '', Price: 0 },
    })

    function onSubmit(): void {
        handleSubmit(async (data) => {
            await createProduct(data)

            reset()
        })()
    }

    return (
        <div className="flex flex-col gap-2">
            <ValidatedInput
                {...register('Code')}
                label="Code"
                error={errors.Code?.message}
                placeholder="Product Code"
            />
            <ValidatedInput
                {...register('Name')}
                label="Name"
                error={errors.Name?.message}
                placeholder="Product Name"
            />
            <ValidatedInput
                type="number"
                {...register('Price', { valueAsNumber: true })}
                label="Price"
                error={errors.Price?.message}
            />

            <Button
                size="lg"
                className="w-full mt-2"
                onClick={onSubmit}
                disabled={Object.keys(errors).length > 0 || isSubmitting}
            >
                Create
            </Button>
        </div>
    )
}
