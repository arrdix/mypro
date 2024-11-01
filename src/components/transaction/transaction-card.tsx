import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { currencyFormatter } from '@/utils/helper'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TransactionCard(): JSX.Element {
    function copyCode(): void {
        navigator.clipboard.writeText('TRX001')
    }
    return (
        <div className="flex flex-col border rounded-lg px-4">
            <div className="flex justify-between items-center">
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
            </div>
            <Separator />
            <div className="flex justify-between py-3">
                <div className="flex flex-col">
                    <p className="text-xs text-muted">Products</p>
                    <p className="text-xl font-bold">
                        20 <span className="text-xs">Pc(s)</span>
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs text-muted">Total</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">{currencyFormatter(21000)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
