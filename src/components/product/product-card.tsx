import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Ellipsis, Settings2 } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { currencyFormatter } from '@/utils/helper'

export function ProductCard(): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col border rounded-lg px-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col py-2">
                        <p className="font-bold">Mangga</p>
                        <div className="flex gap-1">
                            <p className="text-xs text-muted">
                                <span className="font-bold"># </span>ABC
                            </p>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Ellipsis size={24} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="-translate-x-5">
                            <DropdownMenuItem className="text-xs text-danger">
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Separator />
                <div className="flex justify-between items-center py-3">
                    <div className="flex flex-col">
                        <p className="text-xs text-muted">Price</p>
                        <div className="flex gap-1">
                            <p className="text-xs font-bold">RP</p>
                            <p className="text-xl font-bold">{currencyFormatter(3000)}</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        className="bg-foreground/5 text-foreground p-2 rounded-lg transition-colors hover:bg-foreground/15"
                    >
                        <Settings2 />
                    </Button>
                </div>
            </div>
        </div>
    )
}
