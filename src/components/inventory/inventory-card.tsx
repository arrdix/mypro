import { FlatCard } from '@/components/ui/flat-card'
import { currencyFormatter } from '@/utils/helper'

export function InventoryCard(): JSX.Element {
    return (
        <FlatCard>
            <FlatCard.Header className="flex-col items-start">
                <p className="font-bold">Mangga</p>
                <div className="flex gap-1">
                    <p className="text-xs text-muted">
                        <span className="font-bold"># </span>ABC
                    </p>
                </div>
            </FlatCard.Header>
            <FlatCard.Body>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Price</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">{currencyFormatter(2000)}</p>
                    </div>
                </FlatCard.BodyItem>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Stock</p>
                    <p className="text-xl font-bold">
                        20 <span className="text-xs">Pc(s)</span>
                    </p>
                </FlatCard.BodyItem>
            </FlatCard.Body>
        </FlatCard>
    )
}
