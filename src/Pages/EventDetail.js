import React, { useEffect, useState } from "react";
import stakeShirtPng from '../assets/png/stake-shirt.png';
import manchesterUnitedPng from '../assets/png/manchester-united.png';
import location from '../assets/svg/location.svg';
import calendar from '../assets/svg/calendar.svg';
import clock from '../assets/svg/clock.svg';
import facebook from '../assets/svg/facebook.svg';
import instagram from '../assets/svg/instagram.svg';
import x from '../assets/svg/x.svg';
import link from '../assets/svg/link.svg';
import whatsapp from '../assets/svg/whatsapp.svg';
import stadium from '../assets/svg/stadium.svg';
import backArrowWhite from '../assets/svg/back-arrow-white.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";

function EventDetail() {
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
    <div>
        <Header className="max-md:hidden" />
    <div id="bannerSection" className={`w-full flex justify-center items-center pt-4 pb-[17px] md:py-[45px] md:h-[330px] bg-[url(./assets/png/banner5-mobile.png)] md:bg-[url(./assets/png/banner5.png)] bg-cover bg-center ${isScrolled ? 'event-detail-shrink' : ''}`}>
        <div className="w-full text-white text-center">
            <div id="backArrow" className="shrink-0 md:hidden w-8 h-8 fixed top-4 left-4 rounded-full bg-white bg-opacity-[5%] flex items-center justify-center">
                <img src={backArrowWhite} alt="arrow" />
            </div>
            <div id="shirtBox" className={`mx-auto w-fit mb-2.5  ${isScrolled ? 'hidden' : 'flex'}`}>
                <div className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                    <img src={manchesterUnitedPng} className="w-full h-full mt-3.5" alt="image" />
                </div>
                <div className="z-10 -ml-[27px] w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                    <img src={stakeShirtPng} className="w-full h-full mt-1 object-contain" alt="image" />
                </div>
            </div>
            <h1 id="title" className={`text-xl md:text-[40px] font-semibold leading-[30px] md:leading-[50px] ${isScrolled ? 'title' : ''}`}>Liverpool vs Man City</h1>
            <p id="subTitle" className={`text-sm leading-[21px] md:text-base md:leading-[26px] font-normal opacity-80 mt-0.5 md:mt-[5px] ${isScrolled ? 'subTitle' : ''}`}>20 tickets remaining</p>
        </div>
    </div>
    <div className="max-md:hidden container-lg px-[112px] bg-white py-4 flex items-center justify-center min-[1123px]:justify-between flex-wrap gap-4">
        <div>
            <div className="flex items-center gap-[21px]">
                <div className="flex gap-2 items-center">
                    <img src={location} className="w-6 h-6" alt="location icon" />
                    <p className="text-base leading-[26px] text-[#201E1ECC]">Prince Abdullah AlFaisal Stadium</p>
                </div>
                <span className="w-[1px] h-3 bg-[#4267B366] rounded-[1px]"></span>
                <div className="flex gap-2 items-center">
                    <img src={calendar} className="w-6 h-6" alt="location icon" />
                    <p className="text-base leading-[26px] text-[#201E1ECC]">Thu 07 Dec</p>
                </div>
                <span className="w-[1px] h-3 bg-[#4267B366] rounded-[1px]"></span>
                <div className="flex gap-2 items-center">
                    <img src={clock} className="w-6 h-6" alt="location icon" />
                    <p className="text-base leading-[26px] text-[#201E1ECC]">8:15 PM</p>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-3 max-md:mt-5 max-md:mb-[30px]">
            <p className="text-xs leading-[18px] md:text-sm md:leading-6 font-medium">Share:</p>
            <div className="flex gap-2.5">
                <div
                    className="w-10 h-10 rounded-full">
                    <img src={facebook} className="w-full h-full" alt="facebook-logo" />
                </div>
                <div
                    className="w-10 h-10 rounded-full">
                    <img src={instagram} className="w-full h-full" alt="youtube-logo" />
                </div>
                <div
                    className="w-10 h-10 rounded-full">
                    <img src={whatsapp} className="w-full h-full" alt="insta-logo" />
                </div>
                <div
                    className="w-10 h-10 rounded-full">
                    <img src={x} className="w-full h-full" alt="x-logo" />
                </div>
                <div
                    className="w-10 h-10 rounded-full">
                    <img src={link} className="w-full h-full" alt="link logo" />
                </div>
            </div>
        </div>
    </div>
    <div id="contentSection" className={`bg-neutral-100 ${isScrolled ? 'pt-[110px]' : ''}`}>
        <div  className="container-lg px-4 py-5 md:py-10 md:px-[112px] md:flex items-start gap-5">
            <div className="md:flex-1">
                <p className="text-base md:text-[30px] leading-6 md:leading-[50px] font-semibold">Details</p>
                <p className="max-md:hidden text-sm leading-[21px] text-[#201E1E99] mt-[15px]">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut perspiciatis unde omnis iste natus eratus rored ut perspiciatis unde omnis iste natus eratusror Sed ut perspiciatis unde omnis iste natus eratusror.</p>
                <p className="md:hidden text-[#201E1E99] text-xs leading-[18px] mt-2.5">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut perspiciatis unde omnis iste natus eratusror.</p>
                <div className="md:hidden">
                    <hr className="my-[15px] border-[#0000001A]" />
                <div className="flex gap-2.5 items-center md:my-[15px]">
                    <img src={location} className="w-4 h-4" alt="location icon" />
                    <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Prince Abdullah AlFaisal Stadium</p>
                </div>
                <div className="flex items-center gap-[19px] mt-5">
                    <div className="flex gap-1 items-center">
                        <img src={calendar} className="w-4 h-4" alt="location icon" />
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                    </div>
                    <span className="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                    <div className="flex gap-1 items-center">
                        <img src={clock} className="w-4 h-4" alt="location icon" />
                        <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 max-md:mt-5 max-md:mb-[30px]">
                    <p className="text-xs leading-[18px] md:text-sm md:leading-6 font-medium">Share:</p>
                    <div className="md:hidden flex gap-2.5">
                        <div
                            className="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src={facebook} className="w-full h-full" alt="facebook-logo" />
                        </div>
                        <div
                            className="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src={instagram} className="w-full h-full" alt="youtube-logo" />
                        </div>
                        <div
                            className="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src={whatsapp} className="w-full h-full" alt="insta-logo" />
                        </div>
                        <div
                            className="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src={x} className="w-full h-full" alt="x-logo" />
                        </div>
                        <div
                            className="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src={link} className="w-full h-full" alt="x-logo" />
                        </div>
                    </div>
                </div>
                </div>
                <p className="text-base md:text-[30px] leading-6 md:leading-[50px] font-semibold mt-[30px] md:mt-5">Ticket Booking</p>
                <img src={stadium} className="md:hidden mt-5 mx-auto" alt="stadium image" />
                <div className="flex items-center md:flex-wrap gap-2.5 mt-5 md:gap-5 overflow-auto no-scrollbar pb-5">
                    <div className="w-[160px] md:w-[230px] h-[114px] md:h-[144px] shadow-small rounded-[10px] bg-white shrink-0">
                        <div className="p-2.5 pb-3 md:p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-base md:text-xl leading-[22px] md:leading-[30px] font-semibold">Kit Room</p>
                                <input type="radio" name="kit" id="kit"/>
                            </div>
                            <p className="text-base leading-[22px] mt-2.5 md:mt-[7px]">$200 <span className="text-xs leading-5 ml-[5px] text-[#2F2F2F99]">per person</span></p>
                        </div>
                        <div className="border-t border-[#2F2F2F0D] px-2.5 md:px-5 pt-[7px] pb-[11px] md:py-[13px]">
                            <p className="text-xs md:text-sm leading-5 text-[#2F2F2F99]">2 tickets remaining</p>
                        </div>
                    </div>
                    <div className="w-[160px] md:w-[230px] h-[114px] md:h-[144px] shadow-small rounded-[10px] bg-white shrink-0">
                        <div className="p-2.5 pb-3 md:p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-base md:text-xl leading-[22px] md:leading-[30px] font-semibold">Kit Room</p>
                                <input type="radio" name="kit" id="kit"/>
                            </div>
                            <p className="text-base leading-[22px] mt-2.5 md:mt-[7px]">$200 <span className="text-xs leading-5 ml-[5px] text-[#2F2F2F99]">per person</span></p>
                        </div>
                        <div className="border-t border-[#2F2F2F0D] px-2.5 md:px-5 pt-[7px] pb-[11px] md:py-[13px]">
                            <p className="text-xs md:text-sm leading-5 text-[#2F2F2F99]">2 tickets remaining</p>
                        </div>
                    </div>
                    <div className="w-[160px] md:w-[230px] h-[114px] md:h-[144px] shadow-small rounded-[10px] bg-white shrink-0">
                        <div className="p-2.5 pb-3 md:p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-base md:text-xl leading-[22px] md:leading-[30px] font-semibold">Kit Room</p>
                                <input type="radio" name="kit" id="kit"/>
                            </div>
                            <p className="text-base leading-[22px] mt-2.5 md:mt-[7px]">$200 <span className="text-xs leading-5 ml-[5px] text-[#2F2F2F99]">per person</span></p>
                        </div>
                        <div className="border-t border-[#2F2F2F0D] px-2.5 md:px-5 pt-[7px] pb-[11px] md:py-[13px]">
                            <p className="text-xs md:text-sm leading-5 text-[#2F2F2F99]">2 tickets remaining</p>
                        </div>
                    </div>
                </div>
                <p className="text-base md:text-[30px] leading-6 md:leading-[50px] font-semibold">What's included?</p>
                <div className="text-[#201E1EB2] mt-2.5 md:mt-[15px]">
                    <p className="text-sm leading-[21px]">Premium padded seating, Tier 2, East Stand (See stadium seating map below)</p>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Access to the Travel Club Lounge 2 hours before kick-off & up to 1 hour after the final whistle</li>
                        <li>Seating in Blocks 240</li>
                        <li>Pre-match grazing menu buffet</li>
                        <li>Complimentary half time drink</li>
                        <li>Licensed bar</li>
                        <li>Former player appearances (subject to availability)</li>
                        <li>Families and children welcome</li>
                        <li>E-tickets supplied roughly 4 days in advance</li>
                        <li>Tickets are located in Home supporters areas. Any guests seen to be openly supporting the opposition or wearing away team colours are liable to be refused entry/ejected without compensation</li>
                        <li>Please note that due to TV scheduling, fixture dates and times are always subject to change. Your tickets cannot be refunded or cancelled if there is a change of date or time of the fixture</li>
                    </ul>
                </div>
            </div>
            <div className="md:min-w-[392px]">
                <div className="p-4 bg-white md:rounded-[20px] max-md:fixed bottom-0 left-0 w-full flex flex-row md:flex-col items-center justify-between">
                    <div className="flex flex-row md:flex-col max-md:items-center w-full">
                        <div className="custom-select-wrapper2 relative">
                            <select id="options" className="bg-white w-[74px] md:w-full h-12 border border-[#201E1E1A] md:w-full rounded-[10px] pl-[21px]">
                                <option selected>1</option>
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                                <option value="option1">4</option>
                            </select>
                        </div>
                        <div className="ml-3 md:flex md:items-center md:justify-between md:mt-5 md:mb-[30px]">
                            <span className="text-xs md:text-sm text-[#201E1E66] leading-3 md:leading-6">Best Seats</span>
                            <p className="text-base md:text-xl font-semibold leading-6 md:leading-[30px]">Total $200</p>
                        </div>
                    </div>
                    <button className="bg-[#E82F24] text-sm text-white h-12 w-[127px] md:w-full border border-[#E82F24] font-semibold rounded-full">Book</button>
                </div>
                <img src={stadium} className="max-md:hidden mt-[30px] w-full" alt="stadium image" />
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default EventDetail;