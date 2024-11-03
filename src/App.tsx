import { Layout } from '@/layout/layout'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { InventorySkeleton } from '@/components/skeleton/inventory-skeleton'
import { ProductSkeleton } from '@/components/skeleton/product-skeleton'
import { TransactionSkeleton } from '@/components/skeleton/transaction-skeleton'
import { TransactionDetailSkeleton } from '@/components/skeleton/transaction-detail-skeleton'
import { DefaultSkeleton } from '@/components/skeleton/default-skeleton'

const Inventory = lazy(async () => import('@/pages/inventory'))
const Product = lazy(() => import('@/pages/product'))
const Transaction = lazy(() => import('@/pages/transaction'))
const TransactionDetail = lazy(() => import('@/pages/transaction-detail'))
const NotFound = lazy(() => import('@/components/error/not-found'))

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Suspense fallback={<InventorySkeleton />}>
                            <Inventory />
                        </Suspense>
                    }
                />
                <Route
                    path="product"
                    element={
                        <Suspense fallback={<ProductSkeleton />}>
                            <Product />
                        </Suspense>
                    }
                />
                <Route
                    path="transaction"
                    element={
                        <Suspense fallback={<TransactionSkeleton />}>
                            <Transaction />
                        </Suspense>
                    }
                />
                <Route
                    path="transaction/:id"
                    element={
                        <Suspense fallback={<TransactionDetailSkeleton />}>
                            <TransactionDetail />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<DefaultSkeleton />}>
                            <NotFound />
                        </Suspense>
                    }
                ></Route>
            </Route>
        </Routes>
    )
}

export default App
