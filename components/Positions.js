import useSWR from "swr";

const fetcher = (url, profileId) =>
  fetch(url + new URLSearchParams({ profileId })).then((r) => r.json());

const Positions = ({ portfolio }) => {
  const {profile} = portfolio;
  const { data, error } = useSWR(
    [`/api/v1/portfolio/perpetual/position?`, profile.id],
    fetcher
  );

  if (error) return null;
  if (!data) return <div>loading...</div>;
  if (data.length === 0) return <div>No positions</div>;
  return (
    <div>
      <h4 className="p-3">Positions: {`${portfolio.exchange.kind} ⮕  ${portfolio.profile.name}`}</h4>
      <table className="min-w-full border-collapse divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              product
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              entry_price
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              liquidation_price
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              position_amount
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              position_side
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              leverage
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              margin_type
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              isolated_margin
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              unrealized_pnl
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((position) => (
            <tr key={position.product} className="even:bg-gray-100">
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.product}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.entry_price}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.liquidation_price}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.position_amount}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.position_side}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.leverage}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.margin_type}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.isolated_margin}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {position.unrealized_pnl}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
