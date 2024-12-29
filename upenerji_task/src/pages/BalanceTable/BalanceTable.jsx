import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreditCardModal from "../../components/CreditCardModal";
import LoanModal from "../../components/LoanModal";
import CreateCoupon from "../../components/CreateCoupon";
const Balance = () => {
  const balanceData = useSelector((state) => state.balance);
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

  return (
    <div className={`container mx-auto p-4`}>
      <div className="flex gap-4"></div>

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
              <tr key={id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
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

      {isModalCreditCard && (
        <CreditCardModal id={id} onClose={() => setIsModalCreditCard(false)} />
      )}
      {isModalLoan && (
        <LoanModal id={id} onClose={() => setIsModalLoan(false)} />
      )}
      {isCouponModal && (
        <CreateCoupon id={id} onClose={() => setIsCouponModal(false)} />
      )}
    </div>
  );
};

export default Balance;
