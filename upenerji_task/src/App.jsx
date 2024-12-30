import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CouponTable from "./pages/Coupons/CouponTable";
import Navbar from "./components/Navbar";
import BalanceTable from "./pages/BalanceTable/BalanceTable";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coupons" element={<CouponTable />} />
        <Route path="/balances" element={<BalanceTable />} />
      </Routes>
    </>
  );
}

//useLocation kullanabilmek için bir adet wrapper kullandık.
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
