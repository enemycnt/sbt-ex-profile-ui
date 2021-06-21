import useSWR from 'swr';

import Balances from './Balances'

const fetcher = (url, profileId) => fetch(url + new URLSearchParams({profileId})).then(r => r.json())

const Portfolio = ({portfolio}) => {
  const {exchange, profile} = portfolio;
  const kind = exchange.kind.toLowerCase()
  const { data, error } = useSWR([`/api/v1/portfolio/${kind}/balance?`, profile.id], fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className="shadow flex-grow">
      <div className="header flex bg-red-800 text-white p-4">
        <div>Balance: {`${exchange.kind} ⮕  ${profile.name}`}</div>
      </div>
      <div>
        <Balances data={data} />
      </div>
    </div>
  );
};

export default Portfolio;