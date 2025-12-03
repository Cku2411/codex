import React from "react";
import WelcomeBananer from "./_components/WelcomeBananer";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div className="p-10 md:px-20 lg:px-36 xl:px-48 font-game">
      <div className="grid grid-cols-3 gap-7 divide-x">
        <div className="col-span-2">
          <WelcomeBananer />
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default DashboardPage;
