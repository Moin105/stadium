import React, { useState, useEffect, useRef } from 'react';
import arrow from '../assets/svg/arrow.svg';
import chelseaShirt from '../assets/svg/chelsea-shirt.svg';
import standardShirt from '../assets/svg/standard-shirt.svg';
import englandShirt from '../assets/svg/england-shirt.svg';
import huskyShirt from '../assets/svg/husky-shirt.svg';
import unibetShirt from '../assets/svg/unibet-shirt.svg';

const AllTeamsCarousel = () => {
    const carouselRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [gap, setGap] = useState(20);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current && carouselRef.current.querySelector('div')) {
                setCardWidth(carouselRef.current.querySelector('div').offsetWidth);
                const gapValue = parseInt(carouselRef.current.getAttribute('data-gap'), 10) || 20;
                setGap(gapValue);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollLeft = () => {
        const totalMoveDistance = cardWidth + gap;
        let newPosition = scrollPosition + totalMoveDistance;
        if (newPosition > 0) newPosition = 0;
        setScrollPosition(newPosition);
    };

    const scrollRight = () => {
        const totalMoveDistance = cardWidth + gap;
        let newPosition = scrollPosition - totalMoveDistance;
        const maxScrollLeft = carouselRef.current ? carouselRef.current.scrollWidth - carouselRef.current.clientWidth : 0;
        if (Math.abs(newPosition) > maxScrollLeft) newPosition = -maxScrollLeft;
        setScrollPosition(newPosition);
    };

    return (
        <div className="carousel-container container-lg md:px-[52px] bg-neutral-100 flex gap-5" data-gap="20">
            <div className="leftBtn mt-[63px] max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollLeft}>
            <img src={arrow} className="w-5 h-5" alt="arrow"/></div>
            <div className="overflow-auto no-scrollbar md:overflow-hidden">
                <div ref={carouselRef} className="carousel max-md:px-4 flex items-center gap-5 pb-5 md:pb-[60px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${scrollPosition}px)` }}>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#FAE5EA] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={standardShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#0017BB36] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={chelseaShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Chelsea</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#1341731A] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={englandShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">England</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#1341731A] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#1B2F4A1A] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={huskyShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] -mt-1.5 md:-mt-5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Millwall</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#CAEDFF] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#6AB4DB4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={unibetShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] -mt-1.5 md:-mt-5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#FAE5EA] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={standardShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#CAEDFF] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#6AB4DB4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={unibetShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] -mt-1.5 md:-mt-5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div className="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#FAE5EA] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div className="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src={standardShirt} className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div className="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                </div>
            </div>
            <div className="rightBtn mt-[63px] max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollRight}><img src={arrow} className="w-5 h-5" alt="arrow"/></div>
        </div>
    );
};

export default AllTeamsCarousel;
                