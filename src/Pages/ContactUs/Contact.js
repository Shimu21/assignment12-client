import React from 'react';
import contactImg from '../../assets/Images/contactImg.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${contactImg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl text-[#FFC801] font-bold">CONTACT </h1>
                        <p className='text-white text-2xl text-center'>Your Reliable Source for Heavy Construction Equipment and Spare Parts</p>
                        <h1 className='text-3xl font-bold text-[#FFC801]  text-center mb-24 shadow-xl border-6 border-white'>CONTACT US (86) 188 2631 5313</h1>
                    </div>
                </div>
            </div>
            <div className='container flex content-center items-center justify-between mt-12 mb-12'>

                <div className='mr-12 ml-7 w-[40%]'>
                    <h3 className='text-2xl font-bold text-white'>Sales Team</h3>
                    <p className='text-white'>The Parts Master & customers should be one best team as well-organized partners to maintain and pioneer markets. we will always study how to meet
                        the customers’ needs, The final goal is the benefits of all relatedThe Parts Master’s suppliers & customers.</p>
                    <p><small><BsFillTelephoneFill className='mr-5 text-[#FFC801]' /> <span className='text-white ml-5'>+86-18826315313</span></small></p>
                    <p><HiOutlineMail className='mr-5 text-[#FFC801]' /> <span className='text-white ml-5'>info@partsmaster.group</span></p>
                </div>

                <div className='mr-14 ml-10'>
                    <img src="https://www.mesaco.co.jp/dcms_media/image/contact_img.png" alt="" />
                </div>

                <div className='mr- ml-5 mb-12'>
                    <h4 className='text-2xl font-bold text-white'>Company Addresses</h4>
                    <hr className='w-auto text-white' /> <br /><br />
                    <p><small className=' text-white'>MEIJI SANGYO COMPANY, China</small></p>
                    <p><small className=' text-white'>(Tel)86-020-82313009</small></p>
                    <p><small className=' text-white'>270, East Zhongshan Avenue, Huangpu District, Horizon, Horizon, China</small></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;