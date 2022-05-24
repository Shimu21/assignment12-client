import React from 'react';
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
                <img src="https://cdn.shortpixel.ai/spai/w_175+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/HITACHI.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_175+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/HYUNDAI.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_175+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/CATERPILLAR.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_335+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/KYOTECHS.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_175+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/ISUZU.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_338+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/KOMATSU.png" alt="" />
                <img src="https://cdn.shortpixel.ai/spai/w_280+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/SANY.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default ApplicableBrands;