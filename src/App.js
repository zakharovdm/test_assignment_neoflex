import { Route, Navigate, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
