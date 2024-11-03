import { Button } from '@/components/ui/button'

export function ErrorMessage(): JSX.Element {
    function reloadPage(): void {
        window.location.reload()
    }

    return (
        <div className="flex flex-col justify-center items-center gap-2 h-screen">
            <p className="font-bold">Oops! Something went wrong.</p>
            <Button onClick={reloadPage}>Reload</Button>
        </div>
    )
}
