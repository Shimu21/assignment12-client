import React from 'react';
import { FcRating } from 'react-icons/fc';


const Review = ({ review }) => {
    const { name, img, ratings, comments } = review;
    return (
        <div className="card bg-base-100 shadow-xl border-4 border-primary">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className='rating'>
                    <p><small>
                        <input type="radio" name="rating-5" className="mask mask-star" />
                        <input type="radio" name="rating-4" className="mask mask-star" checked />
                        <input type="radio" name="rating-5" className="mask mask-star" />
                        <input type="radio" name="rating-3" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        {ratings}</small></p>

                </div>
                <p>{comments}</p>
            </div>
        </div>
    );
};

export default Review;