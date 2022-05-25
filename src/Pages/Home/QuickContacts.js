import React from 'react';
import { BsFillTelephoneFill, BsQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const QuickContacts = () => {
    return (
        <div >
            <div className='container mx-auto mb-5 w-[65%] bg-[#103178] p-2'>
                <div className='flex content-center items-center place-content-between '>
                    <div className=''>
                        <p className='flex text-3xl font-bold text-[#FFC801] text-center my-4'>
                            <BsQuestionCircleFill className='mr-3 text-5xl' /> <span>Have a Question for Us? Call Today!</span></p>
                    </div>
                    <div className='flex text-3xl font-bold text-[#FFC801] text-center'>
                        <BsFillTelephoneFill className=' text-4xl' /> <span>+86-18826315313</span>
                    </div>
                </div>
            </div>
            <div className='bg-[#103178] pt-12 pb-12 mb-12 flex justify-evenly items-center'>
                <div>
                    <h1 className='text-4xl font-bold text-[#FFC801]'>We Have <span>Recommendation For you</span></h1>
                    <p className='text-white'>I agree to receiving emails from The Parts Master and understand I can opt out at any time.</p>
                </div>
                <div>
                    <input type="email" className='input input-bordered mr-5 px-24' placeholder='Enter your email address' />
                    <Link to="/login"><input type="submit" className='btn bg-[#ffc801] px-10' value="Subscribe" /></Link>
                </div>
            </div>
        </div>
    );
};

export default QuickContacts;