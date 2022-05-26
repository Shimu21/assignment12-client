import React from 'react';

const MyResume = () => {
    return (
        <div>
            <h1 className='text-white text-center text-3xl font-bold p-12'>RESUME</h1>
            <div class="card bg-neutral text-neutral-content mx-12 mb-12">
                <div class="card-body items-center text-center">
                    <div>
                        <img src="https://i.ibb.co/tHRx2ck/cv-n.jpg" style={{ height: "200px", }} alt="" />
                        <p className='text-white '>SHIMU AKTER</p>
                    </div> <br /><br />
                    <div>
                        <h1 className='text-white '>SUMMARY</h1>
                        <p>This is Shimu Akter, from Dhaka Bangladesh, a hard working family person.
                            I have worked in four different companies, in different roles. Now I am polishing and trained up my knowledge in Web Development sector to build up my
                            career as a successful Web Developer in future. I have completed my BBA degree in Finance and Banking and MBA degree in MArketing from Sought East University.
                            I have trained up my skills by attending various knowledge enriching


                        </p>
                    </div>
                    <div class="card-actions justify-end">
                        <div class="card card-side">
                            <div class="card-actions justify-start mr-5 ">
                                <h2 className='text-white'>CAREER</h2>
                            </div>
                            <div class="card-actions justify-end text-white ">
                                <h2 className='text-white'>EDUCATIONS</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyResume;