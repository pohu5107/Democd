import { BrowserRouter } from "react-router-dom";
import AppRouter from asdf  "./routes/AppRouter.jsx";

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
