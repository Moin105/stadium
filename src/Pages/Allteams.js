import React from 'react'
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import chelseaShirt from '../assets/svg/chelsea-shirt.svg';
import standardShirt from '../assets/svg/standard-shirt.svg';
import stakeShirt from '../assets/svg/stake-shirt.svg';
import etihadShirt from '../assets/svg/etihad-shirt.svg';
import englandShirt from '../assets/svg/england-shirt.svg';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import home from '../assets/svg/home.svg';
import teamsBlue from '../assets/svg/teams-blue.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import BannerContent from '../components/BannnerContent';
import Footer from '../components/Footer';
import TeamCard3 from '../components/TeamCard3';

const data = [
    {
        shirtImage: standardShirt,
        shirtBgColor: "#D000311A",
        borderColor: "#D0003166"
    },
    {
        shirtImage: chelseaShirt,
        shirtBgColor: "#0017BB1A",
        borderColor: "#0017BB66"
    },
    {
        shirtImage: standardShirt,
        shirtBgColor: "#D000311A",
        borderColor: "#D0003166"
    },
    {
        shirtImage: chelseaShirt,
        shirtBgColor: "#0017BB1A",
        borderColor: "#0017BB66"
    },
    {
        shirtImage: standardShirt,
        shirtBgColor: "#D000311A",
        borderColor: "#D0003166"
    },
    {
        shirtImage: chelseaShirt,
        shirtBgColor: "#0017BB1A",
        borderColor: "#0017BB66"
    }
]

function Allteams() {
  return (
    <div>
        <Header />
    {/* <!-- Banner --/> */}
    <div className="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner2.png)] bg-cover">
        <BannerContent title="Team" subTitle="Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers piciatis unde omnis iste natus eratusror" search={true} />
    </div>
    {/* <!-- Content --/> */}
    <div className="bg-neutral-100">
        <div className="container-lg px-4 md:px-[100px] pt-5 md:pt-[60px] pb-[171px] md:pb-[100px]">
            <p className="md:hidden text-xl leading-[30px] font-semibold">Teams</p>
            <p className="text-sm leading-6 mb-2.5 md:mb-5 font-medium md:font-semibold md:text-[30px] md:leading-[50px]">Premier League</p>
            <div className="flex gap-[11px] md:gap-5 flex-wrap">
                {data.map((item, index) => {
                    return <TeamCard3 key={index} shirtImage={item.shirtImage} borderColor={item.borderColor} shirtBgColor={item.shirtBgColor} />
                })}
            </div>
            <p className="text-sm leading-6 mb-2.5 md:mb-5 font-medium md:font-semibold md:text-[30px] md:leading-[50px] mt-5 md:mt-[30px]">Championship</p>
            <div className="flex gap-[11px] md:gap-5 flex-wrap">
                {data.map((item, index) => {
                    return <TeamCard3 key={index} shirtImage={item.shirtImage} borderColor={item.borderColor} shirtBgColor={item.shirtBgColor} />
                })}
            </div>
        </div>
    </div>
    {/* <!-- Tabbar for mobile --/> */}
   
    <div className="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
        <Link to="/" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={home} className="mx-auto mb-[5px]" alt="icon"/>
            Home
        </Link>
        <Link to="/all-teams" className="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
            <span className="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
            <img src={teamsBlue} className="mx-auto mb-[5px]" alt="icon"/>
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
    <Footer />
    </div>
  )
}

export default Allteams