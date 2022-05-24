import { Link } from 'react-router-dom';

const BusinessSummary = () => {
    return (
        <div>
            {/* B.Summary Part-1*/}
            <h1 className='text-3xl font-bold text-[#FFC801] text-center'> BUSINESS <span className='text-white'>SUMMARY</span></h1>
            <div className='text-center'>
                <h5 className='text-2xl text-white text-center'>Why choose <span className='text-2xl text-[#FFC801]'>us ?</span></h5>

                {/* B.Summary Part-1.1 */}
                <p className='text-white'>The Parts Master is China Top Brand Solutions of Excavator Parts.</p>
                <div className='flex content-center items-center justify-evenly mt-12'>
                    <div>
                        <p className="text-white">SINCE</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>2010</h1>
                        <p className="text-white">Over 10 years spare parts experience</p>
                    </div>
                    <div>
                        <p className="text-white">PART NUMBER</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>30000</h1>
                        <p className="text-white">30,000 part numbers listed</p>
                    </div>
                    <div>
                        <p className="text-white">COUNTRIES</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>60</h1>
                        <p className="text-white">Customers served more than 60 countries</p>
                    </div>
                    <div>
                        <p className="text-white">FACILITIES </p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>18000</h1>
                        <p className="text-white">Strong local manufacturers</p>
                    </div>
                </div>

                {/* B.Summary Part-1.2 */}
                <div className='flex content-center items-center justify-evenly mt-12'>
                    <div>
                        <p className="text-white">WE SERVED</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>100+</h1>
                        <p className="text-white">Customer per day</p>
                    </div>
                    <div>
                        <p className="text-white">REVENUE</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>120M+</h1>
                        <p className="text-white">Generate 120M+ annual revenue</p>
                    </div>
                    <div>
                        <p className="text-white">REVIEWS</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>33K+</h1>
                        <p className="text-white">Customers reviews are tremendously increasing</p>
                    </div>

                    <div>
                        <p className="text-white">PARTS</p>
                        <h1 className='text-5xl font-bold text-[#FFC801]'>100+</h1>
                        <p className="text-white">We have all sorts of car parts</p>
                    </div>
                </div>
            </div>

            <div class="container mt-20  bg-[#071532]">
                <div class=" flex content-center items-center justify-between ">
                    {/*  B.Summary Part-2 (img) */}
                    <div className='mr-10 ml-10'>
                        <img className='shadow-xl border-4 border-[#103178] w-[150%] h-[150%]' src="https://www.vesleecn.com/data/watermark/20181119/5bf233c4a0583.png" alt="" />
                        <span className='text-white'>Our Vision is offering superior product, Serving million of customers.</span>
                    </div>

                    {/* B.Summary Part-2.1 */}
                    <div className='ml-10 mr-10'>
                        <h1 class="text-2xl font-bold text-[#FFC801]">OUR STORY WITH MISSION VISION</h1>
                        <p><small className='text-[#FFC801]'>Welcome  to visit our website of The Parts Master!</small></p>
                        <p class="py-6 text-white">The Parts Master focuses on supplying Excavator genuine, OEM and after-sales parts. For the benefit of all our potential customers over the world, we will do our eternal & ultimate endeavor to supply optimized One-Stop Service Solutions according to customers’ needs.</p>


                        <div className='text-[#FFC801] font-bold '>
                            <ul className='flex justify-start items-around'>
                                <li className='m-2'>
                                    <Link to="/mission">MISSION</Link>
                                </li>
                                <li className='m-2'>
                                    <Link to="/vision">VISION</Link>
                                </li>
                            </ul>
                        </div>
                        <button
                            class="btn btn-primary font-bold px-10 min-h-0 mb-8 border-1 border-white"><Link to="/contact"><small>CONTACT US !!!</small></Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;