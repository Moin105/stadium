import React from 'react'
import arrow from '../assets/svg/arrow.svg';
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import chelseaShirt from '../assets/svg/chelsea-shirt.svg';
import standardShirt from '../assets/svg/standard-shirt.svg';
import stakeShirtPng from '../assets/png/stake-shirt.png';
import manchesterUnitedPng from '../assets/png/manchester-united.png';
import infiniteShirtPng from '../assets/png/infinite-shirt.png';
import englandShirt from '../assets/svg/england-shirt.svg';
import location from '../assets/svg/location.svg';
import calendar from '../assets/svg/calendar.svg';
import clock from '../assets/svg/clock.svg';
import huskyShirt from '../assets/svg/husky-shirt.svg';
import unibetShirt from '../assets/svg/unibet-shirt.svg';
import shield from '../assets/svg/shield.svg';
import ticket from '../assets/svg/ticket.svg';
import heart from '../assets/svg/heart.svg';
import cardBanner1 from '../assets/png/card-banner1.png';
import cardBanner3 from '../assets/png/card-banner3.png';
import cardBanner4 from '../assets/png/card-banner4.png';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import homeBlue from '../assets/svg/home-blue.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import TeamsCarousel from '../components/TeamsCarousel';
import AllTeamsCarousel from '../components/AllTeamsCarousel';
import PopularTeamsCarousel from '../components/PopularTeamsCarousel';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white">
        <div className="flex justify-between items-center gap-4">
            <img src={logo} className="h-6 w-[157px]" alt="logo"/>
            <div className="flex gap-[30px]">
                <div className="gap-10 hidden md:flex">
                    <ul className="flex gap-5 lg:gap-10 items-center text-sm">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all-teams">Teams</Link></li>
                        <li><Link to="/all-tournaments">Tournament</Link></li>
                    </ul>
                    <div className="flex gap-5">
                        <button className="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button className="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign up</button>
                    </div>
                </div>
                <img src={trolly} alt="Trolly"/>
            </div>
        </div>
        <div className="md:hidden bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] mt-10 h-[50px] overflow-hidden">
            <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
            <img src={search} className="w-5 h-5" alt="search"/>
        </div>
    </header>

    <div className="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner1.png)] bg-cover">
        <div className="w-full max-w-[500px] text-white text-center">
            <h1 className="text-[40px] font-semibold leading-[50px]">Welcome to Stadiumz</h1>
            <p className="leading-[26px] font-normal mt-1">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers piciatis unde omnis iste natus eratusror </p>
            <div className="flex items-center pr-5 w-full rounded-full bg-white mt-10 h-[50px] overflow-hidden">
                <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
                <img src={search} className="w-5 h-5" alt="search"/>
            </div>
        </div>
    </div>
    <TeamsCarousel />
    <div className="w-full bg-neutral-100 pt-5 md:pt-[60px] pb-5 md:pb-20">
        <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Popular</h2>
            <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="all-tournaments">View all <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow" /></a>
        </div>
        <PopularTeamsCarousel />
        {/* Tournament cards */}
        <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Tournament</h2>
            <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="tournament">View all <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow" /></a>
        </div>
        <div className="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
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
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Upcoming</h2>
            <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="upcoming">View all 
            <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow" /></a>
        </div>
        <div className="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner4} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3 object-contain" alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={manchesterUnitedPng} className="w-full h-full mt-3.5" alt="image"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Deals</h2>
            <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="#">View all <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/>
            </a>
        </div>
        <div className="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner4} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div className="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={infiniteShirtPng} className="w-full h-full mt-3 object-contain" alt="image"/>
                    </div>
                    <p className="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src={manchesterUnitedPng} className="w-full h-full mt-3.5" alt="image"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div className="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src={cardBanner3} className="w-full h-[70px] md:h-[130px]" alt="banner"/>
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
                            <img src={calendar} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div className="flex gap-1 items-center">
                            <img src={clock} className="w-4 h-4" alt="location icon"/>
                            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 className="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button className="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">All Teams</h2>
            <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="all-team">View all <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/></a>
        </div>
        <AllTeamsCarousel />
        <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Popular</h2>
            <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="all-tournaments">View all <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/></a>
        </div>
        <PopularTeamsCarousel />
        <div className="container-lg px-4 md:px-[112px]">
            <div className="bg-white lg:flex md:items-center px-[27.58px] lg:px-[70px] py-[30px] md:py-[51.5px] rounded-[20px]">
                <div className="text-center lg:mr-[63px] lg:w-[262px] lg:px-3.5">
                    <div className="w-[60px] h-[60px] mb-2.5 md:mb-3 rounded-full bg-[#13B752] bg-opacity-10 flex justify-center items-center mx-auto">
                        <img src={shield} className="w-9 h-9" alt="icon"/>
                    </div>
                    <p className="text-base md:text-[20px] font-semibold leading-[24px] md:leading-[30px]">Only safe & secure sites</p>
                    <p className="text-sm leading-[21px] mt-[5px]">We assess the integrity of every site we recommend
                        before adding them to your search.
                        </p>
                </div>
                <span className="max-lg:hidden w-[1px] h-[167px] bg-[#4267B333]"></span>
                <div className="text-center lg:ml-[63px] lg:mr-[52px] max-lg:my-[27px] lg:w-[288px] lg:px-3.5">
                    <div className="w-[60px] h-[60px] mb-2.5 md:mb-3 rounded-full bg-[#426FB3] bg-opacity-10 flex justify-center items-center mx-auto">
                        <img src={ticket} className="w-9 h-9" alt="icon"/>
                    </div>
                    <p className="text-base md:text-[20px] font-semibold leading-[24px] md:leading-[30px]">We find more Tickets</p>
                    <p className="text-sm leading-[21px] mt-[5px]">Compare all the best
                        ticket sites in one
                        simple search                    
                    </p>
                </div>
                <span className="max-lg:hidden w-[1px] h-[167px] bg-[#4267B333]"></span>
                <div className="text-center lg:ml-[54px] lg:w-[288px] lg:px-[9px]">
                    <div className="w-[60px] h-[60px] mb-2.5 md:mb-3 rounded-full bg-[#FF7438] bg-opacity-10 flex justify-center items-center mx-auto">
                        <img src={heart} className="w-9 h-9" alt="icon"/>
                    </div>
                    <p className="text-base md:text-[20px] font-semibold leading-[24px] md:leading-[30px]">Fans love us</p>
                    <p className="text-sm text-[#201E1EB2] leading-[21px] mt-[5px]">Over 2.5 millions fans
                        each year trust
                        help get the best
                        deal on tickets.
                        </p>
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
                    <span className="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-[12px] leading-[18px] md:leading-[26px]">70,000 fans get
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
                    <div className="hidden md:flex items-center gap-10 text-[14px]">
                        <Link to="/" className="h-[24px]">Home</Link>
                        <Link to="/all-teams" className="h-[24px]">Teams</Link>
                        <Link to="/all-tournaments" className="h-[24px]">Tournament</Link>
                    </div>
                    <div className="md:hidden flex justify-between gap-6 text-[12px] text-[#FFFFFFCC]">
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
                className=" container-lg md:mx-auto md:px-[112px] pt-[30px] pb-[106px] md:pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                <span className="text-[12px] text-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div className="hidden md:flex justify-between gap-2 gap-[25px] text-[12px] font-medium text-[#FFFFFFCC]">
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
    <div className="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
        <Link to="/" className="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
            <span className="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
            <img src={homeBlue} className="mx-auto mb-[5px]" alt="icon"/>
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

export default Home