import { NotFound } from '@/components/error/not-found'
import { Layout } from '@/layout/layout'
import { Inventory } from '@/pages/inventory'
import { Product } from '@/pages/product'
import { Transaction } from '@/pages/transaction'
import { TransactionDetail } from '@/pages/transaction-detail'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inventory />} />
                <Route path="product" element={<Product />} />
                <Route path="transaction" element={<Transaction />} />
                <Route path="transaction/:id" element={<TransactionDetail />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    )
}

export default App
