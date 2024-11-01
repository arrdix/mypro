import { Overview } from '@/components/ui/overview'
import { Separator } from '@/components/ui/separator'

export function InventoryOverview(): JSX.Element {
    return (
        <Overview>
            <Overview.Body>
                <Overview.Content>
                    <div className="flex flex-1 flex-col gap-1 items-center">
                        <p className="text-xs text-muted">Product(s)</p>
                        <p className="text-4xl font-bold">3</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-1 flex-col gap-1 items-center">
                        <p className="text-xs text-muted">Stock(s)</p>
                        <p className="text-4xl font-bold">40</p>
                    </div>
                </Overview.Content>
            </Overview.Body>
        </Overview>
    )
}
