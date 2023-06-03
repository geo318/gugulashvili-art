import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router';

const Home = lazy(() => import('pages/Home/Home'));
const Gallery = lazy(() => import('pages/Gallery/Gallery'));
const Links = lazy(() => import('pages/Links/Links'));
const Upload = lazy(() => import('pages/Upload/Upload'));
const Update = lazy(() => import('pages/Update/Update'));

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
        <Route
          path='/update'
          element={
            <Suspense>
              <Update />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
