import React from 'react';
import swimmingImg from '../assets/swimming.png'
import playgroundImg from '../assets/playground.png'
import classImg from '../assets/class.png'
import bg from '../assets/bg.png'



const Qzone = () => {
    return (
        <div>
            <h1 className='font-bold text-xl my-4'>QZone</h1>
            <div>
                <img src={swimmingImg} alt="" />
                <img src={playgroundImg} alt="" />
                <img src={classImg} alt="" />


            </div>
            <img className='p-1' src={bg} alt="" />
        </div>
    );
};

export default Qzone;