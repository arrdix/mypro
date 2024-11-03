import { Skeleton } from '@/components/ui/skeleton'

export function TransactionDetailSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-96" />
            <div className="flex justify-end gap-2">
                <Skeleton className="w-1/2 h-10" />
            </div>
        </div>
    )
}
