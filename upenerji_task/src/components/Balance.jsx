import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const balanceData = useSelector((state) => state.balance);

  console.log(balanceData);

  return (
    <div>
      <div
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>

        {balanceData.map(({ type, amount }) => {
          return (
            <div className="text-white" key={type}>
              <span>{type}</span> Balance : <span> {amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Balance;
