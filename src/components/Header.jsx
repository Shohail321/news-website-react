import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-10'>
            <img src={logo} alt="" />
            <p className='text-[#706F6F] my-3 text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F] text-lg font-semibold'>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;