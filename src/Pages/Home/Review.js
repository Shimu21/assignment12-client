import React from 'react';
import { FcRating } from 'react-icons/fc';


const Review = ({ review }) => {
    const { name, img, ratings, comments } = review;
    return (
        <div class="card bg-base-100 shadow-xl border-4 border-primary">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <div className='rating'>
                    <p><small>
                        <input type="radio" name="rating-5" class="mask mask-star" />
                        <input type="radio" name="rating-4" class="mask mask-star" checked />
                        <input type="radio" name="rating-5" class="mask mask-star" />
                        <input type="radio" name="rating-3" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        {ratings}</small></p>

                </div>
                <p>{comments}</p>
            </div>
        </div>
    );
};

export default Review;