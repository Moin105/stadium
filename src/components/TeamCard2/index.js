import React from 'react'

const TeamCard2 = ({data}) => {
    const {shirtImage, name, shirtBg, cardBg} = data;
  return (
    <div className={`relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[${cardBg}] rounded-[20px] md:rounded-[29px] flex justify-center items-center`}>
        <div className={`bg-[${shirtBg}] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2`}>
            <img src={shirtImage} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
        </div>
        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">{name}</div>
    </div>
  )
}

export default TeamCard2