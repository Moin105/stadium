import React, { useEffect, useState } from "react";
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import trolly from '../assets/svg/trolly.svg';
import croppedShirtPng from '../assets/png/cropped-shirt.png';
import teamShirts from '../assets/png/team-shirts.png';
import manchesterUnitedPng from '../assets/png/manchester-united.png';
import infiniteShirtPng from '../assets/png/infinite-shirt.png';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import backArrowWhite from '../assets/svg/back-arrow-white.svg';
import redArrow from '../assets/svg/red-arrow.svg';
import { Link } from "react-router-dom";


function Team() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 768) {
                if (window.pageYOffset > 10) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                setIsScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div data-page="team-page">
    <header className="container-lg hidden md:block max-w-[1214px] px-4 mx-auto py-5 bg-white">
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
    </header>
    {/* <!-- Banner --/> */}
    <div id="bannerSection" className={`w-full z-50 px-4 md:hidden overflow-hidden rounded-b-[38px] flex justify-center md:h-[300px] bg-[url(./assets/png/banner4-mobile.png)] bg-cover bg-[#00000066] ${isScrolled ? 'team-shrink' : ''}`}>
        <div className="w-full text-white text-center max-md:pt-5">
            <div className="flex">
                <div
                    className="w-8 md:hidden fixed top-4 left-4 h-8 flex items-center justify-center shrink-0 border border-white border-opacity-[80%] rounded-full cursor-pointer">
                    <img src={backArrowWhite} alt="arrow"/>
                </div>
                <div className="-ml-8 flex-1 self-center">
                    <h1 id="title" className={`md:text-[40px] text-[20px] leading-[30px] font-semibold md:leading-[50px] ${isScrolled ? 'title' : ''}`}>Manchester City
                    </h1>
                    <p id="subTitle" className={`text-xs leading-[20px] mt-0.5 text-[#FFFFFFCC] ${isScrolled ? 'subTitle' : ''}`}>Team Members: <span
                            className="text-white">28</span> </p>
                </div>
            </div>
            <div id="shirtBox" className={`w-[233px] mx-auto mt-[27px] ${isScrolled ? 'hidden' : ''}`}>
                <img className="" src={croppedShirtPng} alt="shirt"/>
            </div>
        </div>
    </div>
    <div
        className=" w-full hidden md:block flex justify-center items-center h-[226px] md:h-[250px] bg-[url(./assets/png/banner4.png)] bg-cover bg-[#00000066] ">
        <div className="container-lg flex justify-between  md:px-[112px] pt-[90px] ">
            <div className="text-white">
                <p className="md:text-[40px] leading-[50px] font-semibold">Manchester City</p>
                <p className="text-base leading-[26px] text-[#FFFFFFCC] mt-2.5 mb-[15px]">Team Members: <span
                        className="text-base text-white font-medium">28</span></p>
                <div className="flex">
                    <p className="text-base leading-[26px] text-[#FFFFFFCC]">Stadium: <span className="text-base font-medium text-white ml-1.5">FC
                            Stanford
                            Bridge</span></p>
                    <span className="w-[1px] h-4 my-auto mx-5 bg-[#FFFFFF99]"></span>
                    <p className="text-base leading-[26px] text-[#FFFFFFCC]">Capacity: <span
                            className="text-base text-white font-medium ml-1.5">70,000</span></p>
                </div>
            </div>
            <div className="md:w-[396px] md:h-[160px]">
                <img src={teamShirts} alt="team"/>
            </div>
        </div>
    </div>

    <div id="contentSection" className={`w-full bg-neutral-100 ${isScrolled ? 'pt-[96px]' : ''}`}>
            <div id="detailSection" className={`h-[100px] md:hidden card-shadow-sm rounded-b-[38px] bg-white pt-[20px] px-[16px] ${isScrolled ? 'hidden' : ''}`}>
                <div className="flex justify-between">
                    <span className="text-xs text-[#201E1E99] leading-[20px]">Stadium</span>
                    <span className="text-base leading-[24px] font-semibold">FC Stanford Bridge</span>
                </div>
                <div className="flex justify-between mt-[19px]">
                    <span className="text-xs text-[#201E1E99] leading-[20px]">Capacity</span>
                    <span className="text-base leading-[24px] font-semibold">70,000</span>
                </div>

            </div> 

        <div className="container-lg md:px-[112px] px-[16px]">
            <div className="flex pt-[40px]  justify-between items-center">
                <span className="md:text-[30px] text-[20px] font-semibold ">Match Fixtures</span>
                <div className="md:text-base text-xs font-medium text-[#201E1ECC] ">
                    <div className="custom-select-wrapper">
                        <label for="options" className="">Sort:</label>
                        <select id="options" className="bg-neutral-100 w-16 md:w-20 focus:border-neutral-100">
                            <option selected>Default</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="pt-[14px] md:pt-[20px] pb-8 md:pb-[100px] flex gap-5 flex-wrap max-md:justify-center">
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
                {/* <!-- Card --/> */}
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
            </div>
        </div>
{/* <!-- Footer --/> */}

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
            className=" container-lg md:mx-auto md:px-[112px] pt-[30px] pb-[106px] md:pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
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
</div>
  )
}

export default Team