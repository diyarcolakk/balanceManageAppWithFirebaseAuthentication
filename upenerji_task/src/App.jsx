import Login from "./pages/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route index path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
