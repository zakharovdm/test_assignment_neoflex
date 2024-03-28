import { Route, Navigate, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Products from './pages/Products';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
