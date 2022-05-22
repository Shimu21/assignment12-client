import React from 'react';

const Product = ({ product }) => {
    const { name, img, availableQnty, minQnty, pricePerUnit, description, } = product;
    return (
        <div class="card bg-base-100 shadow-xl border-4 border-primary ">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Available Quentity: {availableQnty}pcs</small></p>
                <p><small>Minimum Order Quentity: {minQnty}pcs</small></p>
                <p><small>Price Per Unit: ${pricePerUnit}</small></p>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;