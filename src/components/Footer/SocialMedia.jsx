import React from 'react';
import Facebook from '../../assets/Facebook.svg';
import Instagrame from '../../assets/Instagram.svg';
import Linkdin from '../../assets/Linkdin.svg';
import Youtube from '../../assets/Youtube.svg';

export default function SocialMedia() {
  return (
    <div className="w-full h-full  flex-col justify-center items-center pt-6">
      <div className="  h-2/3 flex items-center justify-center">
        <img src={Facebook} className="lg:w-20 lg:h-20 cursor-pointer" />
        <img src={Linkdin} className="lg:w-20 lg:h-20 cursor-pointer" />
        <img src={Instagrame} className="lg:w-20 lg:h-20 cursor-pointer" />
        <img src={Youtube} className="lg:w-20 lg:h-20 cursor-pointer" />
      </div>
      <div className="lg:h-1/3 h-0 hidden lg:flex text-xs lg:text-base items-center justify-center ">
        © Powered By: Ideal Roofing Company Limited, Manufacturers
      </div>
    </div>
  );
}
