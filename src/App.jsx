// built in imports
import { useEffect } from "react";
import Lenis from "lenis";

// custom imports
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  // lanis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <AppRoutes />;
}
export default App;
