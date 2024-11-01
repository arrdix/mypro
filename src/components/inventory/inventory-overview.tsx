export function InventoryOverview(): JSX.Element {
    return (
        <>
            <p className="text-xs text-muted">Overview</p>
            <div className="flex gap-2 border rounded-lg p-4">
                <div className="flex flex-1 flex-col gap-1 items-center border-e">
                    <p className="text-xs text-muted">Product(s)</p>
                    <p className="text-4xl font-bold">3</p>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-center">
                    <p className="text-xs text-muted">Stock(s)</p>
                    <p className="text-4xl font-bold">40</p>
                </div>
            </div>
        </>
    )
}
