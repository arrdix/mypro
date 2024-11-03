import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function NotFound(): JSX.Element {
    const navigate = useNavigate()

    function backToPreviousPage(): void {
        navigate(-1)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-6 h-screen">
            <div className="flex flex-col items-center">
                <p className="text-5xl font-bold">404</p>
                <p className="font-bold">Page Not Found</p>
            </div>
            <Button onClick={backToPreviousPage}>Back</Button>
        </div>
    )
}

export default NotFound
