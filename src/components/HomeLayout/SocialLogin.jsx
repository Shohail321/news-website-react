import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl mb-5'>Login With</h1>

            <div className='space-y-4'>
                <button className='btn btn-outline w-full btn-secondary'><IoLogoGoogle />Login with Google</button>
                <button className='btn btn-outline w-full btn-primary'><FaGithub/>Login with Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;