import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const balanceData = useSelector((state) => state.balance);

  return (
    <div className={`container mx-auto p-4`}>
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
            <p className="text-gray-700 dark:text-gray-400">Amount: {amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
