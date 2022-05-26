import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {

    const imageStorageKey = `7eed493b5a06ac228ae824d03a333562`;

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const image = data.img[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        email: data.email,
                        rating: data.rating,
                        comment: data.comment,
                        img: img
                    }
                    // send to your database 
                    fetch('https://fierce-everglades-09233.herokuapp.com/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('review added successfully')
                            }
                            else {
                                toast.error('Failed to add the reviews');
                            }
                        })

                }

            })
    };

    return (
        <div className='w-[70%] mx-auto'>
            <h2 className='text-xl text-center text-[#FFC801]'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center">
                <input className='input input-bordered w-full max-w-xs font-bold' value={user?.displayName} placeholder='name' {...register("name")} required />
                <input className='input input-bordered w-full max-w-xs font-bold' placeholder='email' {...register("email")} value={user.email} readOnly />
                <input className='input input-bordered w-full max-w-xs' placeholder='rating' type="number" {...register("rating")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='review' {...register("comment")} required />
                <input className='input input-bordered w-full max-w-xs font-bold' type='file' {...register("img")} required />
                <input className='btn btn-primary w-full max-w-xs font-bold' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;