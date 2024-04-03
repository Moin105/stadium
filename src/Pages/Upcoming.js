import React from 'react'
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import manchesterUnitedPng from '../assets/png/manchester-united.png';
import infiniteShirtPng from '../assets/png/infinite-shirt.png';
import location from '../assets/svg/location.svg';
import calendar from '../assets/svg/calendar.svg';
import clock from '../assets/svg/clock.svg';
import cardBanner1 from '../assets/png/card-banner1.png';
import cardBanner3 from '../assets/png/card-banner3.png';
import cardBanner4 from '../assets/png/card-banner4.png';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import home from '../assets/svg/home.svg';
import { Link } from "react-router-dom";

function Upcoming() {
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
     {/* header for mobile */}
    <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src="./assets//svg/back-arrow.svg" alt="arrow"/></div>
        <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Upcoming Matches</p>
    </div>
     {/* Content 1 */}
    <div className="max-md:hidden w-full flex justify-center items-center  h-[260px] bg-[#4267B333] ">
        <div className="w-full max-w-[500px]  text-center">
            <span className="text-[40px] font-semibold  text-black leading-[50px]">Upcoming Matches</span>
            <p className="leading-[26px] text-base  text-[#201E1ECC] mt-2.5">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers
                piciatis unde omnis iste natus eratusror  </p>
        </div>
    </div>
     {/* Content  2 */}
    <div className="w-full container-lg pb-20 bg-neutral-100">
        <div
            className="flex items-center justify-center flex-wrap gap-[15px] md:gap-5 pb-5 md:pb-[20px] no-scrollbar px-4 pt-5 md:pt-[60px] md:px-[112px]">
            <div className="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner1} className="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px]  bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                    <img src={manchesterUnitedPng} className="w-full h-full mt-3 object-contain" 
                            alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5]  shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div className="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div className="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src={location} className="w-4 h-4" alt="location icon"/>
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <div className="flex gap-1 items-center">
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span className="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner1} className="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2]  shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={manchesterUnitedPng} className="w-full h-full mt-3 object-contain" 
                            alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px]  bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div className="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div className="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src={location} className="w-4 h-4" alt="location icon"/>
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <div className="flex gap-1 items-center">
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span className="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={manchesterUnitedPng} className="w-full h-full mt-3 object-contain" 
                            alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div className="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div className="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src={location} className="w-4 h-4" alt="location icon"/>
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <div className="flex gap-1 items-center">
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span className="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                      <img src={manchesterUnitedPng} className="w-full h-full mt-3 object-contain"  alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div className="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div className="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src={location} className="w-4 h-4" alt="location icon"/>
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <div className="flex gap-1 items-center">
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span className="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner4} className="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                     <img src={manchesterUnitedPng} className="w-full h-full mt-3 object-contain" 
                            alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div className="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div className="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src={location} className="w-4 h-4" alt="location icon"/>
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <div className="flex gap-1 items-center">
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span className="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={manchesterUnitedPng} className="w-full h-full mt-3 object-contain" 
                            alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div className="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        className="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 className="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div className="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src={location} className="w-4 h-4" alt="location icon"/>
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <div className="flex gap-1 items-center">
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span className="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full">
        <div className="bg-[#f6eb16] bg-[url(./assets/svg/small-logo.svg)]">
            <div
                className="container-lg px-6 gap-5 py-[35px]  md:pr-[112px] md:pl-[82px] md:py-[79px] flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] mb-[5px] md:mb-2.5">Subscribe
                        to our newsletter</p>
                    <span className="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-xs leading-[18px] md:leading-[26px]">70,000 fans get
                        notified about the hottest events. </span>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div className="flex items-center w-full md:min-w-[300px] lg:min-w-[350px] rounded-full bg-white h-[42px] md:h-[50px] overflow-hidden">
                        <input
                            className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                            type="email" name="search" placeholder="Enter your mail here" />
                    </div>
                    <button className="bg-black text-sm text-white h-[42px] md:h-[50px] w-full md:w-[143px] font-semibold rounded-full">
                        Submit</button>
                </div>
            </div>

        </div>
        <div className="bg-black">
            <div className="container-lg ">
                <div className="px-4 md:px-[112px] py-[35px] md:py-[60px] flex flex-col flex-wrap gap-[42px] md:gap-4 items-center md:flex-row text-white md:justify-between">
                    <img src={footerLogo} className="h-[39px] max-md:hidden" alt="logo"/>
                    <img src={blueLogo} className="h-[23px] w-[157px] md:hidden" alt="logo"/>
                    <div className="hidden md:flex items-center gap-10 text-sm">
                        <Link to="/" className="h-[24px]">Home</Link>
                        <Link to="/all-teams" className="h-[24px]">Teams</Link>
                        <Link to="/all-tournaments" className="h-[24px]">Tournament</Link>
                    </div>
                    <div className="md:hidden flex justify-between gap-2 gap-6 text-xs text-[#FFFFFFCC]">
                        <Link to="/privacy" className="h-[18px]">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="h-[18px]">Terms & Conditions</Link>
                        <Link to="#" className="h-[18px]">Cookies Policy</Link>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={facebookLogo} className="w-5 h-5" alt="facebook-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={youtubeLogo} className="w-5 h-5" alt="youtube-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={instaLogo} className="w-5 h-5" alt="insta-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={xLogo} className="w-5 h-5" alt="x-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#0D0D0D]"></div>
            <div
                className=" container-lg md:mx- auto md:px-[112px] pt-[30px] pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                <span className="text-xs text-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div className="hidden md:flex justify-between gap-2 gap-[25px] text-xs font-medium text-[#FFFFFFCC]">
                    <Link to="/privacy" className="h-[18px]">Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="h-[18px]">Terms & Conditions</Link>
                    <Link to="#" className="h-[18px]">Cookies Policy</Link>
                </div>
                <div className="md:hidden flex gap-4">
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={facebookLogo} className="w-4 h-4" alt="facebook-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={youtubeLogo} className="w-4 h-4" alt="youtube-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={instaLogo} className="w-4 h-4" alt="insta-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={xLogo} className="w-4 h-4" alt="x-logo"/>
                    </div>
                </div>
            </div>
        </div>

    </div>

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