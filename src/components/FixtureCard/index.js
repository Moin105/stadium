import React from 'react'
import manchesterUnitedPng from '../../assets/png/manchester-united.png';
import infiniteShirtPng from '../../assets/png/infinite-shirt.png';
import redArrow from '../../assets/svg/red-arrow.svg';

const FixtureCard = () => {
  return (
    <div className=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
        <div className="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
            <div className="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                <div
                    className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                    <img src={infiniteShirtPng} className="w-full h-full mt-2 md:mt-3 object-contain"
                        alt="image"/>
                </div>
                <p className="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
            </div>
            <div className="flex flex-col text-center md:pt-[37px] pt-[10px]">
                <span className="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                <span className="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
            </div>
            <div className="flex text-center flex-row items-center gap-1.5 md:block">
                <div
                    className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                    <img src={manchesterUnitedPng} className="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain"
                        alt="image"/>
                </div>
                <p className="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
            </div>
        </div>
        <div
            className=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
            <p className="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
            <div className="flex items-center gap-1.5">
                <p className="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                <img src={redArrow} alt="arrow"/>
            </div>
        </div>
    </div>
  )
}

export default FixtureCard;