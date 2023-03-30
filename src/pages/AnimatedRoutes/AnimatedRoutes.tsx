import { AnimatePresence } from 'framer-motion';
import { Gallery } from 'pages/Gallery';
import { Home } from 'pages/Home';
import { Route, Routes, useLocation } from 'react-router';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
};
