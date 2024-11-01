import { Separator } from '@/components/ui/separator'

export function InventoryCard(): JSX.Element {
    return (
        <div className="flex flex-col border rounded-lg px-4">
            <p className="font-bold py-2">Mangga</p>
            <Separator />
            <div className="flex justify-between py-3">
                <div className="flex flex-col">
                    <p className="text-xs text-muted">Price</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">2000</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs text-muted">Stock</p>
                    <p className="text-xl font-bold">
                        20 <span className="text-xs">Pc(s)</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
