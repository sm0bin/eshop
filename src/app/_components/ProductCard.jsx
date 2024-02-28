'use client';
import useLoadCart from '@/hooks/useLoadCart';
import axios from 'axios';
import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
    const [refetch] = useLoadCart();
    const { _id, name, price, image } = product;

    const handleClick = () => {
        console.log('Product clicked:', name);
        axios.post('http://localhost:5500/cart', { name, productId: _id, price, quantity: 1 })
            .then((res) => {
                console.log(res);
                toast.success('Product added to cart!')
                refetch();
            })
            .catch((err) => {
                console.error(err);
            });

    };

    return (
        <div onClick={handleClick} className="card bg-base-100 shadow-md cursor-pointer">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <figure className="">
                <img src={image} alt={name} className="w-full h-32 object-cover" />
            </figure>
            <div className="card-body p-3 items-center text-center">
                <h2 className="card-title text-lg">{name}</h2>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;