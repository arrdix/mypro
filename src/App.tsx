import { Layout } from '@/layout/layout'
import { Inventory } from '@/pages/inventory'
import { Product } from '@/pages/product'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inventory />} />
                <Route path="product" element={<Product />} />
            </Route>
        </Routes>
    )
}

export default App
