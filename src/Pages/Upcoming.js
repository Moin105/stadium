import React from 'react';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import home from '../assets/svg/home.svg';
import { Link } from "react-router-dom";
import TeamsMatchCard from '../components/TeamsMatchCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backArrow from '../assets/svg/back-arrow.svg';
import BannerContent from '../components/BannnerContent';


function Upcoming() {
  return (
    <div>
        <Header className="max-md:hidden" />
        {/* header for mobile */}
        <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
            <div
                className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
                <img src={backArrow} alt="arrow"/></div>
            <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Upcoming Matches</p>
        </div>
        {/* Banner */}
        <div className="max-md:hidden w-full flex justify-center items-center  h-[260px] bg-[#4267B333] ">
            <BannerContent title="Upcoming Matches" subTitle="Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers
                    piciatis unde omnis iste natus eratusror" className="!text-black" />
        </div>
        {/* Content  2 */}
        <div className='bg-neutral-100'>
            <div className="w-full container-lg pb-20">
                <div
                    className="flex items-center justify-center flex-wrap gap-[15px] md:gap-5 pb-5 md:pb-[20px] no-scrollbar px-4 pt-5 md:pt-[60px] md:px-[112px]">
                    {Array.from({ length: 6 }, (_, index) => (
                            <TeamsMatchCard key={index} className="w-[343px]" />
                        ))}
                </div>
            </div>
        </div>
        <Footer />
        {/* Tabbar for mobile */}
        <div className="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
            <Link to="/" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
                <img src={home} className="mx-auto mb-[5px]" alt="icon"/>
                Home
            </Link>
            <Link to="/all-teams" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
                <img src={teams} className="mx-auto mb-[5px]" alt="icon"/>
                Teams
            </Link>
            <Link to="/all-tournaments" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
                <img src={award} className="mx-auto mb-[5px]" alt="icon"/>
                Tournament
            </Link>
            <Link to="/account" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
                <img src={person} className="mx-auto mb-[5px]" alt="icon"/>
                Account
            </Link>
        </div>
    </div>
  )
}

export default Upcoming