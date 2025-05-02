import React from 'react';
import { FaInstalod, FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';

const FindUs = () => {
    return (

        <div>
           <h1 className='font-bold text-xl my-4'>Find Us On</h1>
            <div className='join join-vertical w-full'>
                <button className='btn bg-base-100 justify-start join-item'><FaFacebook></FaFacebook> Facebook</button>
                <button className='btn bg-base-100 justify-start join-item'><FaTwitter></FaTwitter> Twitter</button>
                <button className='btn bg-base-100 justify-start join-item'><FaInstalod></FaInstalod> Instagram</button>
                
            </div>

        </div>

    );
};

export default FindUs;