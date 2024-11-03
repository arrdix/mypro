import { Skeleton } from '@/components/ui/skeleton'

export function ProductSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-10" />
            </div>
            <div className="flex flex-col gap-2">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-full h-32" />
                <Skeleton className="w-full h-32" />
                <Skeleton className="w-full h-32" />
            </div>
        </div>
    )
}
