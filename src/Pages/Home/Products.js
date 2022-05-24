import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='my-12 mx-12'>
            <div className=' text-[#FFC801] text-center mb-12'>
                <h1 className='text-3xl font-bold'>MAIN PRODUCTS</h1>
                <p><small>The Parts Master is China Top Brand Solutions of Excavator Parts.</small></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;