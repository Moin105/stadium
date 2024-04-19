import React, { useEffect, useState } from "react";
import croppedShirtPng from '../assets/png/cropped-shirt.png';
import teamShirts from '../assets/png/team-shirts.png';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import backArrowWhite from '../assets/svg/back-arrow-white.svg';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixtureCard from "../components/FixtureCard";


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
        <Header className="max-md:hidden" />
        {/* <!-- Banner --/> */}
        <div id="bannerSection" className={`w-full z-50 px-4 md:hidden overflow-hidden rounded-b-[38px] flex justify-center md:h-[300px] bg-[url(./assets/png/banner4-mobile.png)] bg-cover bg-[#00000066] ${isScrolled ? 'team-shrink' : ''}`}>
            <div className={`w-full text-white text-center ${isScrolled ? "" : "max-md:pt-5"}`}>
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
            className=" w-full hidden md:flex justify-center items-center h-[226px] md:h-[250px] bg-[url(./assets/png/banner4.png)] bg-cover bg-[#00000066] ">
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
                    {Array.from({length: 9}).map((_, index) => (
                        <FixtureCard key={index} />
                    ))}
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
    </div>
  )
}

export default Team