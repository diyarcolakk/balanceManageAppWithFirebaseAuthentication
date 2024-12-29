import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreditCardPaymentModal from "./creditCardPaymentModal";
import LoanPaymentModal from "./loanPaymentModal";
import CreateCoupon from "./CreateCoupon";
import { useNavigate } from "react-router-dom";
const Balance = () => {
  const balanceData = useSelector((state) => state.balance);
  const navigate = useNavigate();
  const [isTable, setIsTable] = useState(false);
  const [isModalCreditCard, setIsModalCreditCard] = useState(false);
  const [isModalLoan, setIsModalLoan] = useState(false);
  const [isCouponModal, setIsCouponModal] = useState(false);
  const [id, setId] = useState(null);

  const modalCreditCardHandler = (id) => {
    setIsModalCreditCard((prev) => !prev);
    setId(id);
  };
  const modalLoanHandler = (id) => {
    setIsModalLoan((prev) => !prev);
    setId(id);
  };
  const modalCouponCreateHandler = (id) => {
    setIsCouponModal((prev) => !prev);
    setId(id);
  };

  const couponTableHandler = () => {
    navigate("/coupons");
  };

  return (
    <div className={`container mx-auto p-4`}>
      <div className="flex gap-4">
        <button
          onClick={couponTableHandler}
          className="px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Coupons Table
        </button>
        <button
          onClick={() => setIsTable((prev) => !prev)}
          className="px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          {isTable ? "Show Table" : "Show Cards"}
        </button>
      </div>
      {!isTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Balance</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {balanceData.map(({ id, type, amount }) => (
                <tr
                  key={id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="border px-4 py-2">{id}</td>
                  <td className="border px-4 py-2">{type}</td>
                  <td className="border px-4 py-2">{amount}</td>
                  <td className="border px-4 py-2 text-right">
                    <button
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
                      onClick={() => modalCouponCreateHandler(id)}
                    >
                      Create Coupon
                    </button>
                    <button
                      onClick={() => modalLoanHandler(id)}
                      className="ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
                    >
                      Loan Payment
                    </button>
                    <button
                      onClick={() => modalCreditCardHandler(id)}
                      className="ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
                    >
                      Credit Card payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isModalCreditCard && (
        <CreditCardPaymentModal
          id={id}
          onClose={() => setIsModalCreditCard(false)}
        />
      )}
      {isModalLoan && (
        <LoanPaymentModal id={id} onClose={() => setIsModalLoan(false)} />
      )}
      {isCouponModal && (
        <CreateCoupon id={id} onClose={() => setIsCouponModal(false)} />
      )}
      {isTable && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {balanceData.map(({ id, type, amount }) => (
            <div
              key={id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {type} Balance
              </h5>
              <p className="text-gray-700 dark:text-gray-400">ID: {id}</p>
              <p className="text-gray-700 dark:text-gray-400">
                Amount: {amount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Balance;
