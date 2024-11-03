import { FlatCard } from '@/components/ui/flat-card'
import { currencyFormatter } from '@/utils/helper'

interface InventoryCardProps {
    name: string
    price: number
    stock: number
}

export function InventoryCard({ name, price, stock }: InventoryCardProps): JSX.Element {
    return (
        <FlatCard>
            <FlatCard.Header>
                <p className="font-bold">{name}</p>
            </FlatCard.Header>
            <FlatCard.Body>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Price</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">{currencyFormatter(price)}</p>
                    </div>
                </FlatCard.BodyItem>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Stock</p>
                    <p className="text-xl font-bold">
                        {stock} <span className="text-xs">Pc(s)</span>
                    </p>
                </FlatCard.BodyItem>
            </FlatCard.Body>
        </FlatCard>
    )
}
