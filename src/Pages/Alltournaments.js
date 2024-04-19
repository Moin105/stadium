import React from 'react'
import championsLogo from '../assets/svg/champions-logo.svg';
import laliga from '../assets/svg/laliga.svg';
import bundesLogo from '../assets/svg/bundes-logo.svg';
import copdelrayLogo from '../assets/svg/copdelray-logo.svg';
import euroLogo from '../assets/svg/euro-logo.svg';
import qualifiresLogo from '../assets/svg/qualifires-logo.svg';
import liberLogo from '../assets/svg/liber-logo.svg';
import confederationsLogo from '../assets/svg/confederations-logo.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import awardBlue from '../assets/svg/award-blue.svg';
import person from '../assets/svg/person.svg';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import BannerContent from '../components/BannnerContent';
import TeamLogoCard from '../components/TeamLogoCard';
import Footer from '../components/Footer';

const data = [championsLogo, laliga, bundesLogo, copdelrayLogo, euroLogo, qualifiresLogo, liberLogo, confederationsLogo, championsLogo, liberLogo, qualifiresLogo, bundesLogo, liberLogo, championsLogo, euroLogo, liberLogo, qualifiresLogo, laliga]

function Alltournaments() {
  return (
    <div>
      <Header />
    <div className="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner2.webp)] bg-cover">
        <BannerContent title="Tournaments" subTitle="Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers piciatis unde omnis iste natus eratusror" search={true} />
    </div>
    <div className="w-full bg-neutral-100">
        <h1 className=" md:hidden text-[20px] font-semibold pt-[20px] pb-[15px] px-4">Tournament</h1>
        <div className="container-lg md:pt-[60px] px-4 pb-[20px] md:px-[112px] md:pb-[100px] flex gap-2.5 md:gap-5 flex-wrap">
            {data.map((logo, index) => {
                return <TeamLogoCard key={index} logo={logo} />
            })}
        </div>
    </div>
    <Footer />
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