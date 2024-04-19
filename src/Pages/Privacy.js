import React from 'react'
import backArrow from '../assets/svg/back-arrow.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div>
       <Header className="max-md:hidden" />
        {/* mobile header */}
        <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
            <div
                className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
                <img src={backArrow} alt="arrow"/>
            </div>
            <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Privacy
                Policy</p>
        </div>
        {/* Content */}
        <div className="w-full bg-neutral-100">
            <div className="container-lg md:pt-[80px] pb-[50px] md:pb-[100px] md:px-[112px] px-5 flex ">
                <div className="flex-1">
                    <div>
                        <h1 className="font-semibold text-[20px] md:text-[30px] leading-[50px]">Privacy
                            Policy</h1>
                            <div className="w-[335px] lg:hidden h-[444px] mb-[20px] bg-white border-[1px] border-[#201E1E1A] rounded-[10px]">
                                <div className="w-[295px] h-[56px] rounded-[20px] justify-center flex items-center mx-auto mt-[30px] bg-[#4267B31A] ">
                                    <span className="text-base leading-[24px] font-bold text-[#4267B3]">Information Collection and Use </span>
                                </div>
                                <div className="w-[255px]  h-[48px] rounded-[20px] justify-start flex items-center mx-auto mt-[20px]">
                                    <span className="text-sm  leading-[24px] text-[#201E1E99]">Storage and Protection of Personal Information </span>
                                </div>
                                <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[20px]">
                                    <span className="text-sm  leading-[24px] text-[#201E1E99]">Sharing of Personal Information </span>
                                </div>
                                <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                    <span className="text-sm  leading-[24px] text-[#201E1E99]">Data Retention</span>
                                </div>
                                <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                    <span className="text-sm   leading-[24px] text-[#201E1E99]">Access to Personal Information </span>
                                </div>
                                <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                    <span className="text-sm  leading-[24px] text-[#201E1E99]">Changes to this Privacy Policy </span>
                                </div>
                                <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                    <span className="text-sm  leading-[24px] text-[#201E1E99]">Contact Information </span>
                                </div>
                            </div>
                        <p className="text-sm md:text-base leading-[22px] md:mt-[10px] md:leading-[26px] text-[#201E1E99]">
                            At stadiumz, we are committed to protecting the privacy and security of our clients and website
                            visitors. This Privacy Policy outlines how we collect, use, store and protect the personal
                            information we receive through our website and services.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-[28px]">Information Collection and Use</h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            The information we collect from clients and website visitors may include personal details such
                            as name, email address, phone number, and other relevant information necessary to provide our
                            services. This information is used to respond to inquiries, provide quotes, and fulfill orders.
                        </p>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            We may also collect information through the use of cookies and other tracking technologies to
                            analyze site usage and improve the user experience. This information may include your IP
                            address, browser type, device information, and other details.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Storage and Protection of Personal Information
                        </h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            We take all necessary precautions to protect the personal information we collect from
                            unauthorized access, alteration, or destruction. All personal information is stored in a secure
                            server and access is restricted to authorized personnel only.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Sharing of Personal Information
                        </h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            We do not share personal information with any third parties unless necessary to provide the
                            requested service or comply with legal requirements.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Data Retention
                        </h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            We retain personal information only as long as necessary to provide the services requested and
                            to comply with legal requirements.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Access to Personal Information
                        </h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            Clients have the right to access and correct their personal information in our possession. To
                            exercise this right, please contact us using the information provided below.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Changes to this Privacy Policy
                        </h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            We reserve the right to make changes to this Privacy Policy at any time. If we make changes, we
                            will post the updated policy on our website and update the effective date.</p>
                    </div>
                    <div className="md:pt-[34px]">
                        <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Contact Information
                        </h1>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            If you have any questions or concerns regarding our Privacy Policy, please contact us at
                            hey@stadiumz.com.</p>
                        <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                            This Privacy Policy was last updated on Dec. 30, 2024.</p>
                    </div>

                </div>
                <div className="md:w-[392px] hidden lg:block md:h-[610px] bg-white border-[1px] ml-[41px] border-[#201E1E1A] rounded-[10px]">
                    <div className="w-[338px] h-[68px] rounded-[20px] justify-center flex items-center mx-auto mt-[30px] bg-[#4267B31A] ">
                        <span className="text-[20px] leading-[28px] font-bold text-[#4267B3]">Information Collection and Use </span>
                    </div>
                    <div className="w-[350px] h-[88px] rounded-[20px] justify-start flex items-center mx-auto mt-[18px]">
                        <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Storage and Protection of Personal Information </span>
                    </div>
                    <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14]">
                        <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Sharing of Personal Information </span>
                    </div>
                    <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                        <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Data Retention</span>
                    </div>
                    <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                        <span className="text-base px-5  leading-[28px] text-[#201E1E99]">Access to Personal Information </span>
                    </div>
                    <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                        <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Changes to this Privacy Policy </span>
                    </div>
                    <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[18px]">
                        <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Contact Information </span>
                    </div>
                </div>
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

export default Privacy