import React from 'react'
import stakeShirtPng from '../../assets/png/stake-shirt.png';
import manchesterUnitedPng from '../../assets/png/manchester-united.png';
import location from '../../assets/svg/location.svg';
import calendar from '../../assets/svg/calendar.svg';
import clock from '../../assets/svg/clock.svg';
import cardBanner1 from '../../assets/png/card-banner1.webp';
import Button from '../Button';

const TeamsMatchCard = ({className}) => {
  return (
    <div className={`relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0 ${className}`}>
        <img src={cardBanner1} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
        <div className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
            <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                <img src={manchesterUnitedPng} className="w-full h-full mt-3.5" alt="image"/>
            </div>
            <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
            <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                <img src={stakeShirtPng} className="w-full h-full mt-1 object-contain" alt="image"/>
            </div>
        </div>
        <div className="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
            <div className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
            <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
            <div className="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                <img src={location} className="w-4 h-4" alt="location icon"/>
                <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
            </div>
            <div className="flex items-center gap-[19px]">
                <div className="flex gap-1 items-center">
                    <img src={calendar} className="w-4 h-4" alt="calendar icon"/>
                    <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                </div>
                <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                <div className="flex gap-1 items-center">
                    <img src={clock} className="w-4 h-4" alt="clock icon"/>
                    <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                <Button title="Book" className="max-w-[98px] h-[35px] md:h-[38px]" />
            </div>
        </div>
    </div>
  )
}

export default TeamsMatchCard;