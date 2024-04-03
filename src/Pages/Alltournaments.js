import React from 'react'
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import championsLogo from '../assets/svg/champions-logo.svg';
import laliga from '../assets/svg/laliga.svg';
import bundesLogo from '../assets/svg/bundes-logo.svg';
import copdelrayLogo from '../assets/svg/copdelray-logo.svg';
import euroLogo from '../assets/svg/euro-logo.svg';
import qualifiresLogo from '../assets/svg/qualifires-logo.svg';
import liberLogo from '../assets/svg/liber-logo.svg';
import confederationsLogo from '../assets/svg/confederations-logo.svg';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import awardBlue from '../assets/svg/award-blue.svg';
import person from '../assets/svg/person.svg';
import { Link } from "react-router-dom";

function Alltournaments() {
  return (
    <div>
      <header className="container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white">
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
                        <button className="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button className="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign up</button>
                    </div>
                </div>
                <img src={trolly} alt="Trolly"/>
            </div>
        </div>
        <div className="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] h-[50px] overflow-hidden">
            <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
            <img src={search} className="w-5 h-5" alt="search"/>
        </div>
    </header>
    <div className="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner2.png)] bg-cover">
        <div className="w-full max-w-[500px] text-white text-center">
            <h1 className="text-[40px] font-semibold leading-[50px]">Tournaments</h1>
            <p className="leading-[26px] font-normal mt-1">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers
                piciatis unde omnis iste natus eratusror  </p>
            <div className="flex items-center pr-5 w-full rounded-full bg-white mt-10 h-[50px] overflow-hidden">
                <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
                <img src={search} className="w-5 h-5" alt="search"/>
            </div>
        </div>
    </div>
    <div className="w-full bg-neutral-100">
        <h1 className=" md:hidden text-[20px] font-semibold pt-[20px] pb-[15px] px-4">Tournament</h1>
        <div className="container-lg md:pt-[60px] px-4 pb-[20px] md:px-[112px] md:pb-[100px] flex gap-2.5 md:gap-5 flex-wrap">
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={championsLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={laliga} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={bundesLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={euroLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={qualifiresLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={liberLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={copdelrayLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={euroLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={confederationsLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={championsLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={liberLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={qualifiresLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={bundesLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={liberLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={championsLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={euroLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={qualifiresLogo} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src={laliga} className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
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
                    <div className="md:hidden flex justify-between gap-2 gap-6 text-[12px] text-[#FFFFFFCC]">
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
        <Link to="/" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={home} className="mx-auto mb-[5px]" alt="icon"/>
            Home
        </Link>
        <Link to="/all-teams" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={teams} className="mx-auto mb-[5px]" alt="icon"/>
            Teams
        </Link>
        <Link to="/all-tournaments" className="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
            <span className="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
            <img src={awardBlue} className="mx-auto mb-[5px]" alt="icon"/>
            Tournament
        </Link>
        <Link to="/account" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={person} className="mx-auto mb-[5px]" alt="icon"/>
            Account
        </Link>
    </div></div>
  )
}

export default Alltournaments