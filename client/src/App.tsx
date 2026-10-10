import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

export default function App() {
  const { pathname } = useLocation();
  // Keyed by path so each page remounts with fresh scroll-reveal and timers.
  return (
    <Routes key={pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
