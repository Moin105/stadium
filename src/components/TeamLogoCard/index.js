import React from "react";

const TeamLogoCard = ({logo}) => {
  return (
    <div className="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
      <img
        src={logo}
        className="w-[75px] md:w-[98px] h-[73px] md:h-[100px]"
        alt="logo"
      />
    </div>
  );
};

export default TeamLogoCard;
