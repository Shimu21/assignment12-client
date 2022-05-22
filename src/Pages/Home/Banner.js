import React from 'react';
import bannerImage from '../../assets/Images/bannerImg.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div>
                    <h1 class="mb-5 text-5xl text-[#FFC801] font-bold">The Global Construction Equipment Buyers' Guide
                    </h1>
                    <p className='text-white text-2xl text-center'>Your Reliable Source for Heavy Construction Equipment and Spare Parts</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;