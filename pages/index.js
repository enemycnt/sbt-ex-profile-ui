import useSWR from "swr";
import groupBy from "lodash/groupBy"

import DashboardSection from '../components/DashboardSection'

const fetcher = (url) => fetch(url).then((r) => r.json());

const groupBySourceName = (data) => groupBy(data, 'source.name')
const selectFututres = (data) => data.filter((element) => element.exchange.kind === 'FUTURES')

export default function Home() {
  const { data, error } = useSWR("/api/v1/extended/profile", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const lines = groupBySourceName(data);
  return (
    <div className="container mx-auto">
      <h1 className="px-3 py-6 text-3xl font-bold leading-7 text-gray-900">
        Dashboard
      </h1>
      <main className="space-y-6">
        {Object.keys(lines).map((line) => (
          <div key={line} className={`dasboard-line border`}>
            <h3 className={`p-3 font-bold ${line}`}>{line}</h3>
            <DashboardSection balances={lines[line]} positions={selectFututres(lines[line])} />
          </div>
        ))}
      </main>
    </div>
  );
}

