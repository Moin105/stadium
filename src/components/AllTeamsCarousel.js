import React, { useState, useEffect, useRef } from 'react';
import arrow from '../assets/svg/arrow.svg';
import chelseaShirt from '../assets/svg/chelsea-shirt.svg';
import standardShirt from '../assets/svg/standard-shirt.svg';
import englandShirt from '../assets/svg/england-shirt.svg';
import huskyShirt from '../assets/svg/husky-shirt.svg';
import unibetShirt from '../assets/svg/unibet-shirt.svg';
import TeamCard2 from './TeamCard2';

const data = [
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
    {
        name: 'Liverpool',
        shirtImage: standardShirt,
        shirtBg: '#FFFFFF4D',
        cardBg: '#FAE5EA',
    },
]

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
                    {data.map((item, index) => {
                        return <TeamCard2 key={index} data={item} />;
                    })}
                </div>
            </div>
            <div className="rightBtn mt-[63px] max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollRight}><img src={arrow} className="w-5 h-5" alt="arrow"/></div>
        </div>
    );
};

export default AllTeamsCarousel;
                