import { AnimatePresence } from 'framer-motion';
import { Upload } from 'pages/Upload';
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router';

const Home = lazy(() => import('pages/Home/Home'));
const Gallery = lazy(() => import('pages/Gallery/Gallery'));
const Links = lazy(() => import('pages/Links/Links'));

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/gallery'
          element={
            <Suspense>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          path='/links'
          element={
            <Suspense>
              <Links />
            </Suspense>
          }
        />
        <Route
          path='/upload'
          element={
            <Suspense>
              <Upload />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
