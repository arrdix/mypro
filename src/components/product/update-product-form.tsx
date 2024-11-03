import { Button } from '@/components/ui/button'
import { ValidatedInput } from '@/components/ui/validated-input'
import { useUpdateProduct } from '@/service/product/hooks/use-update-product'
import { updateProductSchema, UpdateProductSchema } from '@/service/product/schema/product.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface UpdateProductFormProps {
    id: string
    name: string
}

export function UpdateProductForm({ id, name }: UpdateProductFormProps): JSX.Element {
    const { updateProduct } = useUpdateProduct()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateProductSchema>({
        resolver: zodResolver(updateProductSchema),
        defaultValues: { Code: '', Name: name },
    })

    function onSubmit(): void {
        handleSubmit(async (data) => {
            updateProduct({ id, dto: data })

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
