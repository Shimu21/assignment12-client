import React from 'react';

const FAQ = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <div className='text-white border border-5 border-[#FFC801] p-6' style={{ maxWidth: '400px', minHeight: "300px" }}>
                        <h6>Q-1: How will you improve the performance of a React Application? </h6>
                        <p>Ans: Some tips to improve the performance of React Application:
                            <ul>
                                <li>1. Use memo and PureComponent.</li>
                                <li>2. Avoid Anonymous Functions.</li>
                                <li>3. Avoid Object Literals.</li>
                                <li>4. Use React.lazy and React.Suspense.</li>
                                <li>5. Avoid Frequent Mounting/Unmounting.</li>
                                <li>5. Caching functions.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div>
                    <div className='text-white border border-5 border-[#FFC801] p-6' style={{ maxWidth: '400px', minHeight: "300px" }}>
                        <h6>Q-2: What are the different ways to manage a state in a React application?</h6>
                        <p>Ans: There are four main types of state you need to properly manage in your React apps:
                            <ul>
                                <li>1. Local state.</li>
                                <li>2. Global state.</li>
                                <li>3. Server state.</li>
                                <li>4. URL state.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div>
                    <div className='text-white border border-5 border-[#FFC801] p-6' style={{ maxWidth: '400px', minHeight: "300px" }}>
                        <h6>Q-3: How does prototypical inheritance work? </h6>
                        <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods
                            and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                            Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </div>

                </div>
            </footer>
        </div>
    );
};


//   {/* <div className='mt-12 mb-12'>
//                 <div className='flex content-center items-center justify-evenly '>

//                     {/* Question:1 */}


//                     {/* Question:2 */}

//                 </div>

//                 <div className='flex content-center items-center justify-evenly mt-12'>

//                     {/* Question:3 */}


//                     {/* Question:4 */}
//                     <div className='text-white border border-5 border-[#FFC801] p-6'>
//                         <h6>Q-4:  What is a unit test? Why should write unit tests? </h6>
//                         <p>Ans: Unit tests are typically automated tests written and run by software developers to
//                             ensure that a section of an application (known as the "unit") meets its design and behaves
//                             as intended. In procedural programming, a unit could be an entire module, but it is more
//                             commonly an individual function or procedure.
//                         </p>
//                         <p>Why should I write unit tests: One of the benefits of unit tests is that they isolate a function, class or method and only test
//                             that piece of code. Higher quality individual components create overall system resiliency. Thus, the
//                             result is reliable code. Unit tests also change the nature of the debugging process.

//                         </p>
//                     </div>

//                     {/* Question:5 */}
//                     <div className='text-white border border-5 border-[#FFC801] p-6'>
//                         <h6>Q-5:  You have an array of products. Each product has a name, price, description, etc.
//                             How will you implement a search to find products by name? </h6>
//                         <p>Ans:
//                         </p>
//                     </div>
//                 </div>

//             </div> */}

export default FAQ;