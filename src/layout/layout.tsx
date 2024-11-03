import { NavItem } from '@/components/navbar/nav-item'
import { Toaster } from '@/components/ui/sonner'
import { Calculator, CircleUserRound, Package, Rows3 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

interface ActiveRoute {
    title: string
    path: string
}

export function Layout(): JSX.Element {
    const { pathname } = useLocation()
    const [{ title, path }, setActiveRote] = useState<ActiveRoute>({
        title: '',
        path: '',
    })

    const paths = {
        inventory: '',
        product: 'product',
        transaction: 'transaction',
    }

    useEffect(() => {
        const path = pathname.split('/')[1]
        const title = path.charAt(0).toUpperCase() + path.slice(1)

        setActiveRote({
            path,
            title: title ? title : 'Dashboard',
        })
    }, [pathname])

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between items-center sticky top-0 py-4 px-6 shadow-base">
                <p className="font-bold">{title}</p>
                <Avatar>
                    <AvatarImage src="/avatar.png" loading="lazy" />
                    <AvatarFallback>
                        <CircleUserRound />
                    </AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col gap-4 p-6 h-full overflow-y-auto">
                <Outlet />
            </div>
            <div className="flex justify-around items-center sticky bottom-0 py-2 px-6 mt-auto shadow-base">
                <NavItem
                    to="/"
                    icon={<Rows3 size={22} />}
                    variant={path === paths.inventory ? 'active' : 'default'}
                />
                <NavItem
                    to="/product"
                    icon={<Package size={22} />}
                    variant={path === paths.product ? 'active' : 'default'}
                />
                <NavItem
                    to="/transaction"
                    icon={<Calculator size={22} />}
                    variant={path === paths.transaction ? 'active' : 'default'}
                />
            </div>
            <Toaster toastOptions={{}} position="top-center" />
        </div>
    )
}
