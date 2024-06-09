import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Route path="dashboard" element={<Dashboard />} />
    </BrowserRouter>
  );
}

export default App;
