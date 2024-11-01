import { NavItem } from '@/components/navbar/nav-item'
import { Calculator, CircleUserRound, Package, Rows3 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export function Layout(): JSX.Element {
    const [activePath, setActivePath] = useState<string>('')
    const { pathname } = useLocation()

    const paths = {
        inventory: '',
        product: 'product',
        transaction: 'transaction',
    }

    useEffect(() => {
        const path = pathname.split('/')[1]

        setActivePath(path)
    }, [pathname])

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between items-center sticky top-0 py-4 px-6 shadow-base">
                <p className="font-bold">MyPro</p>
                <CircleUserRound />
            </div>
            <div className="flex flex-col gap-4 p-6 h-full overflow-y-auto">
                <Outlet />
            </div>
            <div className="flex justify-around items-center sticky bottom-0 py-2 px-6 mt-auto shadow-base">
                <NavItem
                    to="/"
                    icon={<Rows3 size={22} />}
                    variant={activePath === paths.inventory ? 'active' : 'default'}
                />
                <NavItem
                    to="/product"
                    icon={<Package size={22} />}
                    variant={activePath === paths.product ? 'active' : 'default'}
                />
                <NavItem
                    to="/transaction"
                    icon={<Calculator size={22} />}
                    variant={activePath === paths.transaction ? 'active' : 'default'}
                />
            </div>
        </div>
    )
}
