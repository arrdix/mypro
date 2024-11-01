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

export function TransactionDetail(): JSX.Element {
    const { id } = useParams()
    const navigate = useNavigate()

    if (id === 'TRX001')
        return (
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">Transaction Detail</p>
                <div className="flex flex-col border rounded-lg px-4">
                    <p className="font-bold pt-3 pb-1 px-2">{id}</p>
                    <div className="flex flex-col gap-2 pb-3">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-xs">Qty</TableHead>
                                    <TableHead className="text-xs">Product</TableHead>
                                    <TableHead className="text-xs">Price</TableHead>
                                    <TableHead className="text-xs text-right">Subtotal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>10</TableCell>
                                    <TableCell>Mangga</TableCell>
                                    <TableCell>{currencyFormatter(10000)}</TableCell>
                                    <TableCell className="text-right">
                                        {currencyFormatter(10000)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>10</TableCell>
                                    <TableCell>Mangga</TableCell>
                                    <TableCell>{currencyFormatter(10000)}</TableCell>
                                    <TableCell className="text-right">
                                        {currencyFormatter(10000)}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className="flex justify-between items-center px-2 py-2">
                            <p className="font-bold">Grand Total</p>
                            <div className="flex gap-1">
                                <p className="text-xs font-bold">RP</p>
                                <p className="font-bold">{currencyFormatter(100000)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-2 mt-1">
                    <Button variant="ghost" className="w-1/2" onClick={() => navigate(-1)}>
                        Back
                    </Button>
                    <Button className="w-1/2">Print</Button>
                </div>
            </div>
        )

    return <h1>x</h1>
}
