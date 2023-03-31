import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from 'pages/AnimatedRoutes';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <AnimatedRoutes />
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
