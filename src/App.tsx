import './global.css';

import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </ErrorBoundary>
);

createRoot(document.getElementById('root')!).render(<App />);
