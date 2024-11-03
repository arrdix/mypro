import { Button } from '@/components/ui/button'
import { Ellipsis, Settings2 } from 'lucide-react'
import { currencyFormatter } from '@/utils/helper'
import { FlatCard } from '@/components/ui/flat-card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { UpdateProductForm } from '@/components/product/update-product-form'
import { useDeleteProduct } from '@/service/product/hooks/use-delete-product'

interface ProductCardProps {
    id: string
    name: string
    price: number
}

export function ProductCard({ id, name, price }: ProductCardProps): JSX.Element {
    const { deleteProduct } = useDeleteProduct()

    async function onDelete(): Promise<void> {
        await deleteProduct({ id })
    }

    return (
        <FlatCard>
            <FlatCard.Header>
                <p className="font-bold">{name}</p>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Ellipsis size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="-translate-x-5">
                        <DropdownMenuItem className="text-xs text-danger" onClick={onDelete}>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </FlatCard.Header>
            <FlatCard.Body>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Price</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">{currencyFormatter(price)}</p>
                    </div>
                </FlatCard.BodyItem>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="bg-foreground/5 text-foreground p-2 rounded-lg transition-colors hover:bg-foreground/15"
                        >
                            <Settings2 />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="flex flex-col gap-8">
                        <SheetHeader>
                            <SheetTitle>Create Product</SheetTitle>
                            <SheetDescription className="!mt-0">
                                Create a new product item
                            </SheetDescription>
                        </SheetHeader>
                        <div className="max-h-[500px] overflow-y-auto">
                            <UpdateProductForm id={id} name={name} />
                        </div>
                    </SheetContent>
                </Sheet>
            </FlatCard.Body>
        </FlatCard>
    )
}
