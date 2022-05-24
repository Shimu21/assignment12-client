import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [product, setProduct] = useState([])
    const [user] = useAuthState(auth)
    const { productId } = useParams();
    const { name, availableQnty, minQnty, pricePerUnit, description, } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const handleOrder = (event) => {
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const total = pricePerUnit * quantity;
        event.preventDefault();

        const orderDetails = {
            _Id: productId,
            name: user.displayName,
            email: user.email,
            phone: phone,
            productName: name,
            productQuantity: quantity,
            price: total
        }

        if (quantity <= availableQnty && quantity >= minQnty) {
            fetch(`http://localhost:5000/order`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`Order successful`)
                })
            event.target.reset();
        } else {
            toast.warning('give a valid quantity');
            event.target.reset();
        }
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">{name}</h1>
                    <p class="py-6">{description}</p>
                    <p class="py-6">Product have: {availableQnty}</p>
                    <p class="py-6">You have to order more then: {minQnty}</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div >
                        <form onSubmit={handleOrder} class="card-body">
                            <input type="text" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                            <input type="email" value={user.email} class="input input-bordered w-full max-w-xs" />
                            <input type="number" name='phone' placeholder='phone number' class="input input-bordered w-full max-w-xs" required />
                            <input type="text" value={name} class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='quantity' placeholder='Quantity' class="input input-bordered w-full max-w-xs" required />
                            <input type="submit" value="Place Order" class="btn btn-primary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;