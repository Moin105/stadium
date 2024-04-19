import React, { useEffect, useState } from "react";
import championsLogoWhite from '../assets/svg/champions-logo-white.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import backArrowWhite from '../assets/svg/back-arrow-white.svg';
import home from '../assets/svg/home.svg';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixtureCard from "../components/FixtureCard";

function TournamentDetail() {
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
    <div data-page="tournament-details-page">
        <Header className="max-md:hidden" />
        <div id="bannerSection"
            className={`z-50 w-full flex justify-center items-center pb-6 pt-5 md:h-[300px] bg-[url(./assets/png/banner3-mobile.png)] md:bg-[url(./assets/png/banner3.png)] bg-cover ${isScrolled ? 'shrink' : ''}`}>
            <div className="w-full text-white text-center">
                <div
                    className="w-8 h-8 bg-[#FFFFFF0D] fixed top-5 left-[17px] md:hidden flex items-center justify-center shrink-0 border border-white border-opacity-[80%]  rounded-full cursor-pointer">
                    <img src={backArrowWhite} alt="arrow"/>
                </div>
                <div id="logoBox"
                    className={`logoBox md:h-[110px] h-[80px] w-[80px] mx-auto flex justify-center items-center border border-[#FFFFFF33] text-white md:w-[110px] bg-[#232665] rounded-[20px] mt-2 ${isScrolled ? 'hidden' : ''}`}>
                    <img className="md:h-[76px] md:w-[77px] h-[56px] w-[56px]" src={championsLogoWhite}
                        alt=""/>
                </div>
                <h1 id="title" className={`md:text-[40px] mt-2.5 text-[20px] font-semibold leading-[30px] md:leading-[50px] ${isScrolled ? 'title' : ''}`}>Champions Leagues</h1>
                <p id="subTitle" className={`text-xs leading-5 mt-0.5 md:mt-[5px] md:text-base md:leading-[26px] text-[#FFFFFFCC] ${isScrolled ? 'subTitle' : ''}`}>25 Dec, 2023 - 15 Jan, 2024 </p>
            </div>
        </div>
        <div id="contentSection" className={`w-full bg-neutral-100 ${isScrolled ? 'pt-[112px]' : ''}`}>
            <div className="container-lg md:px-[112px] px-[16px]">
                <div className="flex pt-5 md:pt-10 justify-between items-center">
                    <span className="md:text-[30px] text-[20px] leading-[30px] md:leading-[50px] font-semibold ">Match Fixtures</span>
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

export default TournamentDetail