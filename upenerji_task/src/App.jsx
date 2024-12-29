import Login from "./pages/Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CouponTable from "./pages/Coupons/CouponTable";
import Navbar from "./components/Navbar";
import BalanceTable from "./pages/BalanceTable/BalanceTable";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route index path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/coupons" element={<CouponTable />}></Route>
        <Route path="/balances" element={<BalanceTable />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
