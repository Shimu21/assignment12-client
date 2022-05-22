import React from 'react';
import { Link } from 'react-router-dom';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#FFC801] text-center my-4'>BUSINESS SUMMARY</h1>
            <p className='text-xl text-center text-white'>Check out all of the brands we deal with below：Caterpillar, Doosan, Yanmar, Sany, Kobelco, ISUZU, Hyundai, Volvo, Komatsu, Hitachi etc.</p>

            <div class="hero min-h-screen bg-[#071532]">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src="https://cdn.shortpixel.ai/spai/w_505+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/4232452-scaled.jpg" />
                    <div>
                        <h1 class="text-2xl font-bold text-[#FFC801]">OUR STORY WITH MISSION VISION</h1>
                        <p><small className='text-[#FFC801]'>Welcome  to visit our website of the Parts Master!</small></p>
                        <p class="py-6 text-white">The Parts Master focuses on supplying Excavator genuine, OEM and after-sales parts. For the benefit of all our potential customers over the world, we will do our eternal & ultimate endeavor to supply optimized One-Stop Service Solutions according to customers’ needs.</p>


                        <div className='text-[#FFC801] font-bold '>
                            <ul className='flex justify-center items-around'>
                                <li className='m-4 '>
                                    <Link to="/mission" className='border-1 border-white'>MISSION</Link>
                                </li>
                                <li className='m-4'>
                                    <Link to="/vision">VISION</Link>
                                </li>
                            </ul>
                        </div>
                        <button class="btn btn-primary px-10 min-h-0 mt-12 border-1 border-white "> <small>Read More ...</small></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;