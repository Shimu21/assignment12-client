import React from 'react';

const Review = ({ review }) => {
    const { name, img, ratings, comments } = review;
    return (
        <div class="card bg-base-100 shadow-xl border-4 border-primary">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=4818" alt='' />
                    </div>
                </div>
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