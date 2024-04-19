import React from 'react'
import logo from '../assets/png/logo.png';
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import backArrow from '../assets/svg/back-arrow.svg';
import home from '../assets/svg/home.svg';
import { Link } from "react-router-dom";
import TeamsMatchCard from '../components/TeamsMatchCard';
import Footer from '../components/Footer';
import BannerContent from '../components/BannnerContent';

function Tournament() {
  return (
    <div>
          <header className="container-lg max-w-[1214px] hidden md:block px-4 mx-auto py-5 bg-white">
        <div className="flex justify-between items-center gap-4">
            <img src={logo} className="h-6 w-[157px]" alt="logo"/>
            <div className="flex gap-[30px]">
                <div className="gap-10 hidden md:flex">
                    <ul className="flex gap-5 lg:gap-10 items-center text-sm">
                        <Link to="/">Home</Link>
                        <Link to="/all-teams">Teams</Link>
                        <Link to="/all-tournaments">Tournament</Link>
                    </ul>
                    <div className="flex gap-5">
                        <button
                            className="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign
                            up</button>
                    </div>
                </div>
                <img src={trolly} alt="Trolly"/>
            </div>
        </div>
        <div
            className="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] h-[50px] overflow-hidden">
            <input
                className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                type="text" name="search" placeholder="Search" />
            <img src={search} className="w-5 h-5" alt="search"/>
        </div>
    </header>
    <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src={backArrow} alt="arrow"/></div>
        <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Tournament</p>
    </div>
    {/* <!-- Banner --/> */}
    <div className="max-md:hidden w-full flex justify-center items-center  h-[260px] bg-[#4267B333] ">
        <BannerContent title="Tournament" subTitle="Sed
                ut perspiciatis unde omnis iste natus eratusror Sed ut pers
                piciatis unde omnis iste natus eratusror" className="!text-black" />
    </div>
    {/* <!-- Content  2 --/> */}
    <div className='bg-neutral-100'>
        <div className="w-full container-lg pb-20">
            <div
                className="flex items-center justify-center flex-wrap gap-5 pb-5 md:pb-[20px] no-scrollbar px-4 pt-5 md:pt-[60px] md:px-[112px]">
                    {Array.from({ length: 6 }, (_, index) => (
                        <TeamsMatchCard key={index} className="w-[343px]" />
                    ))}
            </div>
        </div>
    </div>
    <Footer />
    {/* <!-- Tabbar for mobile --/> */}

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

export default Tournament