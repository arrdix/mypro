import { Button } from '@/components/ui/button'
import { FlatCard } from '@/components/ui/flat-card'
import { currencyFormatter } from '@/utils/helper'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TransactionCard(): JSX.Element {
    function copyCode(): void {
        navigator.clipboard.writeText('TRX001')
    }
    return (
        <>
            <FlatCard>
                <FlatCard.Header className="flex-row justify-between items-center">
                    <div className="flex items-center">
                        <p className="font-bold pt-2 pb-1">TRX001</p>
                        <Button
                            variant="ghost"
                            className="text-muted hover:bg-transparent px-2"
                            onClick={copyCode}
                        >
                            <Copy />
                        </Button>
                    </div>
                    <Button variant="ghost" className="text-muted hover:bg-transparent pr-0">
                        <Link to={`/transaction/TRX001`}>
                            <SquareArrowOutUpRight />
                        </Link>
                    </Button>
                </FlatCard.Header>
                <FlatCard.Body>
                    <FlatCard.BodyItem>
                        <p className="text-xs text-muted">Products</p>
                        <p className="text-xl font-bold">
                            20 <span className="text-xs">Pc(s)</span>
                        </p>
                    </FlatCard.BodyItem>
                    <FlatCard.BodyItem>
                        <p className="text-xs text-muted">Total</p>
                        <div className="flex gap-1">
                            <p className="text-xs font-bold">RP</p>
                            <p className="text-xl font-bold">{currencyFormatter(21000)}</p>
                        </div>
                    </FlatCard.BodyItem>
                </FlatCard.Body>
            </FlatCard>
        </>
    )
}
