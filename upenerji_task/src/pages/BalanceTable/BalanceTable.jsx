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
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                ID
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Type
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Balance
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {balanceData.map(({ id, type, amount }) => (
              <tr key={id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="border px-4 py-2 text-sm">{id}</td>
                <td className="border px-4 py-2 text-sm">{type}</td>
                <td className="border px-4 py-2 text-sm">{amount}</td>
                <td className="border px-4 py-2 text-sm text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                      onClick={() => modalCouponCreateHandler(id)}
                    >
                      Create Coupon
                    </button>
                    <button
                      onClick={() => modalLoanHandler(id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                    >
                      Loan Payment
                    </button>
                    <button
                      onClick={() => modalCreditCardHandler(id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Credit Card Payment
                    </button>
                  </div>
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
