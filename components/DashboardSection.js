import React from "react";

import Portfolio from "./Portfolio";
import Positions from "./Positions";

const DashboardSection = ({ balances, positions }) => {
  return (
    <>
      <div className="balances-list flex gap-5 flex-wrap">
        {balances.map((portfolio) => (
          <Portfolio key={portfolio.profile.id} portfolio={portfolio} />
        ))}
      </div>
      <div className="balances-list flex flex-col gap-5">
        {positions.map((portfolio) => (
          <Positions key={portfolio.profile.id} portfolio={portfolio} />
        ))}
      </div>
    </>
  );
};

export default DashboardSection;
