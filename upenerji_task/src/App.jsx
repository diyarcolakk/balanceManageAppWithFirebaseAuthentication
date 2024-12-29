import Login from "./pages/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CouponTable from "./components/CouponTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route index path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/coupons" element={<CouponTable />}></Route>
        <Route path="/balances" element={<CouponTable />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
