import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3 my-4'>
            <p className='text-base-100 px-3 py-2  bg-secondary'>Latest</p>
            <Marquee pauseOnHover={true} className='cursor-pointer'>
            <p className='font-semibold'>Global Tech Summit 2025 kicks off in San Francisco / AI startups attract record-breaking investments this year / A major cyberattack targets healthcare networks in Europe / Google announces a quantum breakthrough in computing / Electric air taxis are set for commercial launch in 2026 / The UN issues an urgent warning on climate change progress / Apple’s Vision Pro gets a major software update / SpaceX successfully tests its reusable Starship prototype / The world’s largest solar farm opens in the Middle East / Meta introduces an AI chatbot for business integration / Researchers develop a new drug for Alzheimer’s treatment / Bitcoin adoption rises among small businesses / Experts warn of a global water shortage by 2040 / Amazon unveils a drone delivery expansion plan / Record heatwaves sweep across the Southern Hemisphere / NASA detects signs of water on a distant exoplanet / Electric car battery prices drop 20% in 2025 / The World Bank revises economic forecasts upward / Microsoft launches Copilot AI for Windows 12 / The cybersecurity conference highlights AI threats and solutions</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;