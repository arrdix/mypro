import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef, HTMLProps, ReactNode } from 'react'

export function Overview({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted">Overview</p>
            {children}
        </div>
    )
}

export type Body = HTMLProps<HTMLDivElement>
const Body = forwardRef<HTMLDivElement, Body>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('flex flex-col border rounded-lg p-4', className)} {...props}>
            {children}
        </div>
    )
})
Body.displayName = 'Body'

export type Title = HTMLProps<HTMLDivElement>
const Title = forwardRef<HTMLDivElement, Title>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('text-xs text-muted', className)} {...props}>
            {children}
        </div>
    )
})
Title.displayName = 'Title'

export type Content = HTMLProps<HTMLDivElement>
const Content = forwardRef<HTMLDivElement, Content>(({ children, className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('flex gap-1', className)} {...props}>
            {children}
        </div>
    )
})
Content.displayName = 'Content'

export type ActionButton = ButtonHTMLAttributes<HTMLButtonElement>
const ActionButton = forwardRef<HTMLButtonElement, ActionButton>(
    ({ children, className, ...props }, ref) => {
        return (
            <Button ref={ref} size="lg" className={cn('mt-1', className)} {...props}>
                {children}
            </Button>
        )
    }
)
ActionButton.displayName = 'ActionButton'

Overview.Body = Body
Overview.Title = Title
Overview.Content = Content
Overview.ActionButton = ActionButton
