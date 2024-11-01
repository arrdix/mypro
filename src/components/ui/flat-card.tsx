import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { forwardRef, HTMLProps, ReactNode } from 'react'

export function FlatCard({ children }: { children: ReactNode }): JSX.Element {
    return <div className="flex flex-col border rounded-lg px-4">{children}</div>
}

export type Header = HTMLProps<HTMLDivElement>
const Header = forwardRef<HTMLDivElement, Header>(({ children, className, ...props }, ref) => {
    return (
        <>
            <div
                ref={ref}
                className={cn('flex flex-row justify-between items-center py-2', className)}
                {...props}
            >
                {children}
            </div>
            <Separator />
        </>
    )
})
Header.displayName = 'Header'

export type Body = HTMLProps<HTMLDivElement>
const Body = forwardRef<HTMLDivElement, Body>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('flex justify-between py-3', className)} {...props}>
            {children}
        </div>
    )
})
Body.displayName = 'Body'

export type BodyItem = HTMLProps<HTMLDivElement>
const BodyItem = forwardRef<HTMLDivElement, BodyItem>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('flex flex-col', className)} {...props}>
            {children}
        </div>
    )
})
BodyItem.displayName = 'Body.Item'

export type Footer = HTMLProps<HTMLDivElement>
const Footer = forwardRef<HTMLDivElement, Footer>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn('flex justify-between items-center px-2 py-2', className)}
            {...props}
        >
            {children}
        </div>
    )
})
Footer.displayName = 'Footer'

FlatCard.Header = Header
FlatCard.Body = Body
FlatCard.BodyItem = BodyItem
FlatCard.Footer = Footer
