import React from "react";

const Balances = ({ data }) => {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              locked
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              free
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              total
            </th>
          </tr>
        </thead>
        <tbody>
          {data.sort((a, b) => b.total - a.total).map((token) => (
            <tr key={token.asset} className="even:bg-gray-100">
              <td className="px-3 py-2 text-xs  whitespace-nowrap">{token.asset}</td>
              <td className="px-3 py-2 text-xs  whitespace-nowrap font-semibold">{token.locked}</td>
              <td className="px-3 py-2 text-xs  whitespace-nowrap font-bold text-green-600">{token.free}</td>
              <td className="px-3 py-2 text-xs  whitespace-nowrap ">{token.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Balances;
