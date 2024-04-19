import React from 'react'
import logo from '../../assets/png/logo.png';
import trolly from '../../assets/svg/trolly.svg';
import search from '../../assets/svg/search.svg';
import { Link } from "react-router-dom";
import Button from '../Button';

const Header = ({className}) => {
  return (
    <header className={`container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white ${className}`}>
        <div className="flex justify-between items-center gap-4">
            <img src={logo} className="h-6 w-[157px]" alt="logo"/>
            <div className="flex gap-[30px]">
                <div className="gap-10 hidden md:flex">
                    <ul className="flex gap-5 lg:gap-10 items-center text-sm">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all-teams">Teams</Link></li>
                        <li><Link to="/all-tournaments">Tournament</Link></li>
                    </ul>
                    <div className="flex gap-5">
                        <Button title="Login" className="!w-[130px]" variant="secondary" />
                        <Button title="Sign up" className="!w-[130px]" />
                    </div>
                </div>
                <img src={trolly} alt="Trolly"/>
            </div>
        </div>
        <div className="md:hidden bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] mt-10 h-[50px] overflow-hidden">
            <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
            <img src={search} className="w-5 h-5" alt="search"/>
        </div>
    </header>
  )
}

export default Header;