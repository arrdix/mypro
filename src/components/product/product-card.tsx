import { Button } from '@/components/ui/button'
import { Ellipsis, Settings2 } from 'lucide-react'
import { currencyFormatter } from '@/utils/helper'
import { FlatCard } from '@/components/ui/flat-card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ProductCard(): JSX.Element {
    return (
        <FlatCard>
            <FlatCard.Header>
                <div className="flex flex-col">
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
                        <DropdownMenuItem className="text-xs text-danger">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </FlatCard.Header>
            <FlatCard.Body>
                <FlatCard.BodyItem>
                    <p className="text-xs text-muted">Price</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">RP</p>
                        <p className="text-xl font-bold">{currencyFormatter(3000)}</p>
                    </div>
                </FlatCard.BodyItem>
                <Button
                    variant="ghost"
                    className="bg-foreground/5 text-foreground p-2 rounded-lg transition-colors hover:bg-foreground/15"
                >
                    <Settings2 />
                </Button>
            </FlatCard.Body>
        </FlatCard>
    )
}
