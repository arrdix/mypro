import { Button } from '@/components/ui/button'
import { FlatCard } from '@/components/ui/flat-card'
import { Product } from '@/service/product/types/product.type'
import { currencyFormatter } from '@/utils/helper'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

interface TransactionCardProps {
    code: string
    products: Product[]
    total: number
}

export function TransactionCard({ code, products, total }: TransactionCardProps): JSX.Element {
    function copyCode(): void {
        navigator.clipboard.writeText(code)
        toast('Copied to clipboard.')
    }

    return (
        <FlatCard>
            <FlatCard.Header className="flex-row justify-between items-center">
                <div className="flex items-center">
                    <p className="font-bold pt-2 pb-1">{code}</p>
                    <Button
                        variant="ghost"
                        className="text-muted hover:bg-transparent px-2"
                        onClick={copyCode}
                    >
                        <Copy />
                    </Button>
                </div>
                <Button variant="ghost" className="text-muted hover:bg-transparent pr-0">
                    <Link to={`/transaction/${code}`}>
                        <SquareArrowOutUpRight />
                    </Link>
                </Button>
            </FlatCard.Header>
            <FlatCard.Body>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Product(s)</p>
                    <p className="text-xl font-bold">
                        {products.length} <span className="text-xs">Pc(s)</span>
                    </p>
                </FlatCard.BodyItem>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Total</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">{currencyFormatter(total)}</p>
                    </div>
                </FlatCard.BodyItem>
            </FlatCard.Body>
        </FlatCard>
    )
}
