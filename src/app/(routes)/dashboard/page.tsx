import React from "react";
import WelcomeBananer from "./_components/WelcomeBananer";
import EnrolledCourses from "./_components/EnrolledCourses";
import ExploreMore from "./_components/ExploreMore";
import InviteFriends from "./_components/InviteFriends";
import UserStatus from "./_components/UserStatus";
import UpgradeToPro from "./_components/UpgradeToPro";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div className="p-10 md:px-20 lg:px-36 xl:px-48 font-game">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2">
          <WelcomeBananer />
          <EnrolledCourses />
          <ExploreMore />
          <InviteFriends />
        </div>
        <div>
          <UserStatus />
          <UpgradeToPro />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
