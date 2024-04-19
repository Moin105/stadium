import React from 'react'
import soccer from '../assets/png/soccer.png';
import elipse from '../assets/svg/elipse.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import personBlue from '../assets/svg/person-blue.svg';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

function MyAccount() {
  return (
    <div>
        <Header className="max-md:hidden" />
        <div className="w-full bg-neutral-100">
            <div className="container-lg md:pt-[51px] pb-[50px] md:pb-[100px] flex justify-center items-center">
                <div className="max-w-[1010px] mx-auto px-4 pt-[50px] pb-10 md:pl-20 md:pr-[70px] md:pt-[84px] md:pb-[94px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-between gap-[107px]">
                    <div className="max-md:hidden max-w-[373px] max-h-[272px] ratio-square">
                        <img src={soccer} alt="image"/>
                    </div>
                    <div className="w-full md:w-[379px]">
                        <span className="font-semibold text-[26px] md:text-[30px] leadig-9 md:leading-[40px]">
                            Hello, Guest!👋
                            <br />
                            Wecome to stadiumz
                        </span>
                        <p className="text-sm md:text-base text-[#201E1E99] leading-[22px] md:leading-[26px] mt-2 md:mt-1.5">Before Continue. Please sign in first</p>
                        <div className="text-xs md:text-sm text-[#201E1E99] flex gap-[15px] md:gap-3 mt-5 leading-5 md:leading-6 flex-wrap">
                            <div className="flex gap-2 items-center">
                                <img src={elipse} className="w-1.5 h-1.5" alt="dot"/> <span>Track your bookings</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={elipse} className="w-1.5 h-1.5" alt="dot"/> <span>Ticket alerts</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={elipse} className="w-1.5 h-1.5" alt="dot"/> <span>Ticket alerts</span>
                            </div>
                        </div>
                        <div className="md:hidden max-md:mt-10 max-w-[343px] max-h-[250px] ratio-square">
                            <img src={soccer} alt="image"/>
                        </div>
                        <Button title="Sign up" className="h-12 mt-[60px] md:mt-[50px]" />
                        <Button title="Login" variant='secondary' className="h-12 mt-5" />
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
                <Link to="/account" className="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
                    <span className="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
                    <img src={personBlue} className="mx-auto mb-[5px]" alt="icon"/>
                    Account
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MyAccount