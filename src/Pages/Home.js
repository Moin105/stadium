import React from 'react'
import shield from '../assets/svg/shield.svg';
import ticket from '../assets/svg/ticket.svg';
import heart from '../assets/svg/heart.svg';
import homeBlue from '../assets/svg/home-blue.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import TeamsCarousel from '../components/TeamsCarousel';
import AllTeamsCarousel from '../components/AllTeamsCarousel';
import PopularTeamsCarousel from '../components/PopularTeamsCarousel';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import BannerContent from '../components/BannnerContent';
import TeamsMatchCard from '../components/TeamsMatchCard';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

function Home() {
  return (
    <div>
        <Header />
        <div className="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner1.png)] bg-cover">
            <BannerContent title="Welcome to Stadiumz" subTitle="Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers piciatis
        unde omnis iste natus eratusror" search={true} />
        </div>
        <TeamsCarousel />
        <div className="w-full bg-neutral-100 pt-5 md:pt-[60px] pb-5 md:pb-20">
            <SectionHeader title="Popular" />
            <PopularTeamsCarousel />
            <SectionHeader title="Tournament" />
            <div className="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
                {Array.from({ length: 4 }).map((_, index) => (
                <TeamsMatchCard key={index} />
                ))}
            </div>
            <SectionHeader title="Upcoming" />
            <div className="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
                {Array.from({ length: 4 }).map((_, index) => (
                    <TeamsMatchCard key={index} />
                ))}
            </div>
            <SectionHeader title="Deals" />
            <div className="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
                {Array.from({ length: 4 }).map((_, index) => (
                    <TeamsMatchCard key={index} />
                ))}
            </div>
            <SectionHeader title="All Teams" />
            <AllTeamsCarousel />
            <SectionHeader title="Popular" />
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
        <Footer />
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