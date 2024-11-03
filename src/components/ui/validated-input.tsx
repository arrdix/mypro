import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes } from 'react'

export interface ValidatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: string
}
export const ValidatedInput = forwardRef<HTMLInputElement, ValidatedInputProps>(
    ({ children, className, error, label, ...props }, ref) => {
        return (
            <div className="flex flex-col w-full">
                <label className="text-sm" htmlFor={props.id}>
                    {label}
                </label>
                <input
                    ref={ref}
                    className={cn(
                        'flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:text-muted disabled:border-muted/10 disabled:bg-muted/5',
                        className
                    )}
                    {...props}
                >
                    {children}
                </input>
                <p className="text-sm text-error mt-1">{error}</p>
            </div>
        )
    }
)
ValidatedInput.displayName = 'ValidatedInput'
