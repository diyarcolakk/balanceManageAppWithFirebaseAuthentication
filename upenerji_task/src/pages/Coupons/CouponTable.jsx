import React from "react";
import { useSelector } from "react-redux";

const CouponTable = () => {
  const selector = useSelector((state) => state.balance);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Coupon List</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Coupon Code</th>
              <th className="px-4 py-2 text-left">Coupon Amount</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Finished At</th>
            </tr>
          </thead>
          <tbody>
            {selector.map((item) => {
              // Check if there are coupons in the item
              if (item.coupons && item.coupons.length > 0) {
                return item.coupons.map((coupon) => (
                  <tr key={coupon.couponCode} className="border-t">
                    <td className="px-4 py-2">{coupon.couponCode}</td>
                    <td className="px-4 py-2">{coupon.couponAmount}</td>
                    <td className="px-4 py-2">
                      {formatDate(coupon.createdAt)}
                    </td>
                    <td className="px-4 py-2">
                      {formatDate(coupon.finishedAt)}
                    </td>
                  </tr>
                ));
              } else {
                // If no coupons exist, render a row with empty strings
                return (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponTable;
