import React from 'react';
import { BsFillTelephoneFill, BsQuestionCircleFill } from 'react-icons/bs';


const QuickContacts = () => {
    return (
        <div>
            <div className='container bg-primary mb-12 ml-12 mr-12'>
                <div className='flex content-center items-center place-content-evenly'>
                    <div>
                        <p className='text-3xl font-bold text-[#FFC801] text-center my-4'><BsQuestionCircleFill /> Have a Question for Us? Call Today!</p>
                    </div>
                    <div className='text-3xl font-bold text-[#FFC801] text-center'>
                        <BsFillTelephoneFill />+86-18826315313
                    </div>
                </div>
            </div>
            <div className='bg-primary px-auto pt-12 pb-12 mb-12'>
                <h1 className='text-3xl font-bold text-[#FFC801]'>We Have <span>Recommendation For you</span></h1>
                <p><small className='text-white'>I agree to receiving emails from Hyunkook and understand I can opt out at any time.</small></p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default QuickContacts;