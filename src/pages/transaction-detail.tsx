import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { currencyFormatter } from '@/utils/helper'
import { FlatCard } from '@/components/ui/flat-card'
import { useGetTransaction } from '@/service/transaction/hooks/use-get-transactions'
import { TransactionDetailSkeleton } from '@/components/skeleton/transaction-detail-skeleton'
import { ErrorMessage } from '@/components/error/error-message'
import { NotFound } from '@/components/error/not-found'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export function TransactionDetail(): JSX.Element {
    const { id: code } = useParams()
    const { transactions, isPending, isFetching } = useGetTransaction()

    const navigate = useNavigate()
    const contentRef = useRef<HTMLDivElement>(null)
    const onPrint = useReactToPrint({
        contentRef,
        onBeforePrint: async () => {
            document.title = window.parent.document.title = code ?? 'MyPro App'
        },
        onAfterPrint: () => (document.title = window.parent.document.title = 'MyPro App'),
    })

    if (isPending || isFetching) {
        return <TransactionDetailSkeleton />
    }

    if (!transactions) {
        return <ErrorMessage />
    }

    const requestedTransaction = transactions.find((transaction) => transaction.Code === code)

    if (!requestedTransaction) {
        return <NotFound />
    }

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted">Transaction Detail</p>
            <div ref={contentRef}>
                <FlatCard>
                    <p className="font-bold pt-4 px-2">{requestedTransaction.Code}</p>
                    <FlatCard.Body>
                        <div className="flex flex-col gap-2 w-full">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-xs">Qty</TableHead>
                                        <TableHead className="text-xs">Product</TableHead>
                                        <TableHead className="text-xs">Price</TableHead>
                                        <TableHead className="text-xs text-right">
                                            Subtotal
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {requestedTransaction.Products.map((product) => (
                                        <TableRow key={product.Id}>
                                            <TableCell>{product.Quantity}</TableCell>
                                            <TableCell>{product.Name}</TableCell>
                                            <TableCell>
                                                {currencyFormatter(product.Price)}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {currencyFormatter(product.Subtotal)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </FlatCard.Body>
                    <FlatCard.Footer className="pb-4">
                        <p className="font-bold">Grand Total</p>
                        <div className="flex gap-1">
                            <p className="text-xs font-bold">RP</p>
                            <p className="font-bold">
                                {currencyFormatter(requestedTransaction.Total)}
                            </p>
                        </div>
                    </FlatCard.Footer>
                </FlatCard>
            </div>
            <div className="flex justify-between gap-2 mt-1">
                <Button
                    variant="ghost"
                    className="w-1/2 hover:bg-transparent hover:text-foreground/50"
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
                <Button className="w-1/2" onClick={() => onPrint()}>
                    Print
                </Button>
            </div>
        </div>
    )
}
