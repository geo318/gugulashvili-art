import { AnimatePresence } from 'framer-motion';
import { Home, Gallery, Links } from 'pages';
import { Route, Routes, useLocation } from 'react-router';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/links' element={<Links />} />
      </Routes>
    </AnimatePresence>
  );
};
