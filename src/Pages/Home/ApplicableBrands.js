import React from 'react';
import { FaBeer } from 'react-icons/fa';
import Marquee from "react-fast-marquee";



const ApplicableBrands = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#FFC801] text-center my-12'>APPLICABLE BRANDS</h1>
            <p className='text-white text-center'>Check out all of the brands we deal with below- Caterpillar, Doosan, Yanmar, Sany, Kobelco, ISUZU, Hyundai, Volvo, Komatsu, Hitachi etc.
            </p>
            <Marquee >
                <img src="https://cdn.shortpixel.ai/spai/w_175+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/DOOSAN.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_364+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/YANMAR.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_271+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/VOLVO.png" alt="" />
            </Marquee>
        </div>
    );
};

export default ApplicableBrands;