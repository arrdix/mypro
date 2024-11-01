import { Layout } from '@/layout/layout'
import { Inventory } from '@/pages/inventory'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inventory />} />
            </Route>
        </Routes>
    )
}

export default App
