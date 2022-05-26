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
                    </div> <br />
                    <div>
                        <h1 className='text-white '>SUMMARY</h1>
                        <p className='text-white '>This is Shimu Akter, from Dhaka Bangladesh, a hard working family and carrier oriented person.
                            I have worked in four different companies, in different roles. Now I am polishing and trained up my knowledge in Web Development sector to build up my
                            career as a successful Web Developer in future. I have completed my BBA degree in Finance and Banking and MBA degree in MArketing from Sought East University.
                            I have trained up my skills by attending various knowledge enriching professional courses like Effective Public Speaking training, News Presentation Course, English CELP Course.
                            I believe in working hard and always be ready to welcome new challenges or can be able to cope-up myself to be on track.
                            I can prove my skills and knowledge as a valuable asset for your organization.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex content-center items-center justify-between mb-5'>
                {/* Career Part */}
                <div className='ml-5 mr-3'>
                    <h4 className='text-white text-center mb-5  ml-5  '>CAREER</h4>

                    <div>
                        <div className=''>
                            <small className='text-white'>Duration: <span> Present / </span></small>
                            <small className='text-white'>Position: <span>Training ongoing as a Junior Web Developer /</span> </small>
                            <small className='text-white'>Company Name: <span>Programming Hero</span> </small>
                        </div>
                    </div>
                    <div>
                        <div className='bg-neutral'>
                            <small className='text-white'>Duration: <span>2014 to 2015 / </span></small>
                            <small className='text-white '>Position: <span>Admin Executive / </span> </small>
                            <small className='text-white'>Company Name: <span>Khan Bahadur Group</span> </small>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <small className='text-white'>Duration: <span>2013 to 2014 / </span></small>
                            <small className='text-white'>Position: <span>Customer Care Representative / </span> </small>
                            <small className='text-white'>Company: <span>Grameen Phone (GP)</span> </small>
                        </div>
                    </div>
                    <div>
                        <div className='bg-neutral'>
                            <small className='text-white'>Duration: <span>2010 to 2011 / </span></small>
                            <small className='text-white'>Position: <span>Customer Care Representative / </span> </small>
                            <small className='text-white'>Company: <span>Customer Care Representative / </span> </small>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <small className='text-white'>Duration: <span>2009 to 2010 / </span></small>
                            <small className='text-white'>Position: <span>Customer Care Representative / </span> </small>
                            <small className='text-white'>Company: <span>Customer Care Representative / </span> </small>
                        </div>
                    </div>

                </div>

                {/* Education part */}
                <div className='mr-5 ml-3 mb-5'>
                    <h1 className='text-white text-center mb-5 mr-5'>EDUCATION</h1>

                    <div>
                        <div className=''>
                            <small className='text-white'>Master of Business Administration / </small>
                            <small className='text-white'>Major in Marketing / <span> In 2015 / </span> </small>
                            <small className='text-white'>Southeast University</small>
                        </div>
                    </div>
                    <div>
                        <div className='bg-neutral'>
                            <small className='text-white'>Bachelor of Business Administration / </small>
                            <small className='text-white'>Major in Finance and Banking / <span> In 2014 / </span> </small>
                            <small className='text-white'>Southeast University</small>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <small className='text-white'>Higher Secondary School Certificate / </small>
                            <small className='text-white'>From Commerce / <span> In 2008 / </span> </small>
                            <small className='text-white'>Mirpur Girls Ideal Lab. Institute</small>
                        </div>
                    </div>
                    <div>
                        <div className='bg-neutral'>
                            <small className='text-white'>Higher Secondary School Certificate / </small>
                            <small className='text-white'>From Humanities / <span> In 2006 / </span> </small>
                            <small className='text-white'>Mirpur Shaheed Smriti High School</small>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-white text-center text-xl font-bold'>
                <h1>My little contribution on my small project's that are made by me. </h1>
                <ul>
                    <p>Projects link: </p>

                    <li>* https://singular-crisp-0d0dcb.netlify.app/ </li>

                    <li>* https://glowing-genie-c0944c.netlify.app/ </li>

                    <li>* https://nostalgic-montalcini-6ca070.netlify.app/ </li>
                </ul>
            </div>

        </div>



    );
};

export default MyResume;