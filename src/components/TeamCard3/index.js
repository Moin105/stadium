import React from 'react'

const TeamCard3 = ({shirtImage, borderColor, shirtBgColor}) => {
  return (
    <div className="w-[107px] md:w-[186px] h-[110px] md:h-[192px] league-card-shadow overflow-hidden bg-white flex justify-center pt-[16.58px] md:pt-[29px] rounded-[20px] md:rounded-[34.77px]">
        <div className={`min-w-[118.24px] min-h-[118.24px] md:min-w-[205px] md:min-h-[205px] bg-[${shirtBgColor}] border-[1.74px] border-[${borderColor}] rounded-full`}>
            <img src={shirtImage} className="w-full h-full" alt="shirt"/>
        </div>
    </div>
  )
}

export default TeamCard3;