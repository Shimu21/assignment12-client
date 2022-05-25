import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {

    const imgStorageKey = `7eed493b5a06ac228ae824d03a333562`;

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const image = data.img[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        email: data.email,
                        pricePerUnit: data.pricePerUnit,
                        availableQnty: data.availableQnty,
                        minQnty: data.minQnty,
                        description: data.description,
                        img: img
                    }

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('product added successfully')
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    };

    return (
        <div className='w-[70%] mx-auto'>
            <h2 className='text-center mb-3'>Add Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <input className='input input-bordered w-full max-w-xs' placeholder='Product Name' {...register("name")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='email' {...register("email")} value={user.email} readOnly />
                <input className='input input-bordered w-full max-w-xs' placeholder='Price per unit' type="number" {...register("pricePerUnit")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='Available Quantity' type="number" {...register("availableQnty")} required />
                <input className='input input-bordered w-full max-w-xs' placeholder='Minimum Quantity' type="number" {...register("minQnty")} required />
                <textarea className='input input-bordered w-full max-w-xs' placeholder='description' {...register("description")} required />
                <input className='input input-bordered w-full max-w-xs' type='file' {...register("img")} required />
                <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;