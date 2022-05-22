import React, { useEffect, useState } from 'react';
import Review from '../Home/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-12 mx-12'>
            <h1 className='text-3xl font-bold text-[#FFC801] text-center'>REVIEWS FROM OUR BUYERS</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;