import React from 'react';
import { ImSad2 } from 'react-icons/im';



const NotFound = () => {
    return (
        <div className='flex content-center items-center place-content-center'>
            <div className='text-center text-[#FFC801] p-12'>
                <h1 className='text-4xl font-bold mb-5'>No Search Result</h1>
                <div className='flex content-center items-center place-content-center '>
                    <ImSad2 className='text-red-500 mr-5 text-5xl'></ImSad2>
                    <h1 className='text-red-500 mr-5 text-5xl'>404</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;