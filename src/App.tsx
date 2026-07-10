import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LandingPage = lazy(() =>
  import('./pages/LandingPage').then((m) => ({ default: m.LandingPage }))
);
const LayananPage = lazy(() => import('./pages/LayananPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));

const PageLoader = () => (
  <>
    <Helmet>
      <title>SSD Mobility</title>
    </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-surface-darkest">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-accent/20 rounded-xl" />
        <div className="absolute inset-0 border-4 border-accent rounded-xl border-t-transparent animate-spin" />
        <span className="text-accent font-black text-xs">SSD</span>
      </div>
    </div>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route
            path="/layanan/charger-installation/*"
            element={<Navigate to="/layanan/charger" replace />}
          />
          <Route path="/layanan/:serviceSlug/:productSlug" element={<ProductDetailPage />} />
          <Route path="/layanan/:serviceSlug" element={<ServiceDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
