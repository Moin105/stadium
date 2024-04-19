import React from "react";

const TeamCard1 = ({shirtImage, name, color}) => {
  console.log("color", color)
  return (
    <div className="min-w-fit">
      <div className="border-[3px] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]" style={{borderColor: `${color}66`}}>
        <div className="border-[3px] border-white rounded-full" style={{backgroundColor: `${color}1A`}}>
          <img src={shirtImage} className="w-full h-full" alt="shirt" />
        </div>
      </div>
      <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">
        {name}
      </p>
    </div>
  );
};

export default TeamCard1;
