import aos from 'aos';
import React, { useEffect } from 'react';

const Vision = () => {

    useEffect(() => {
        aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='mb-48 mt-8'>
            <h1 className=' text-center text-xl font-bold text-[#FFC801]'>OUR VISION</h1>
            <p className='text-center text-white mt-4'>We have a great dream, even if it may not come true.
                We know that if we desperately want it and don’t give up, it will definitely come true
                If we think positively, everything in nature will help us and things will naturally run smoothly.

                A strong company, the most important thing is efficiency and the actual content of the company.
                Get a wide variety of excavator engine & parts at wholesale prices and an added advantage of global shipping.
                Enjoy sampling an assortment of excavator engine & parts regardless of your budget constraints.

                Therefore, we will always study how to meet the needs of customers, how much we pay attention to product quality and user experience.
                How to reduce the original production cost and how to upgrade our service to suit the world market situation.
                Ultimately, we will do our best to provide strong support to our valuable customers.
                The ultimate goal is the benefit of all cooperating suppliers and customers.
                We never stop and we write new chapters in this business area every day.</p>
            <div>
                <div data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine" >
                    <img src="https://cdn.shortpixel.ai/spai/w_525+q_lossy+ret_img+to_webp/https://www.hyunkookparts.com/wp-content/uploads/2022/03/Engine-assembly.jpg" />

                </div>
            </div>
        </div>
    );
};

export default Vision;