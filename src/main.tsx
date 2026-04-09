// 1. Cambia el import de BrowserRouter a HashRouter
import { HashRouter } from 'react-router-dom';

// 2. En la parte del Render, envuelve tu App con HashRouter
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
