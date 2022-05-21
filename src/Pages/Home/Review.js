import React from 'react';

const Review = ({ review }) => {
    const { name, img, ratings, comments } = review;
    return (
        <div class="card bg-base-100 shadow-xl border-4 border-indigo-580/100">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small>{ratings}</small></p>
                <p>{comments}</p>
            </div>
        </div>
    );
};

export default Review;