'use client'
import axios from 'axios';
import React from 'react';

const CartItemRow = ({ item, refetch }) => {
    const { _id, name, price, quantity } = item;

    const handleItemIncrease = () => {
        axios.put(`http://localhost:5500/cart/${_id}`, { quantity: quantity + 1 })
            .then((res) => {
                console.log(res);
                refetch();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleItemDecrease = () => {
        if (quantity === 1) {
            return;
        }
        axios.put(`http://localhost:5500/cart/${_id}`, { quantity: quantity - 1 })
            .then((res) => {
                console.log(res);
                refetch();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleDeleteCartItem = () => {
        axios.delete(`http://localhost:5500/cart/${_id}`)
            .then((res) => {
                console.log(res);
                refetch();
            })
            .catch((err) => {
                console.error(err);
            });
    }
    return (
        <tr>
            <th>
                <div className="btn btn-square btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </th>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <div className="join">
                    <button onClick={handleItemDecrease} className="btn btn-sm join-item rounded-l-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    </button>
                    <input name='quantity' className="input input-sm w-14 input-bordered join-item" defaultValue={quantity} />
                    <button onClick={handleItemIncrease} className="btn btn-sm join-item rounded-r-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </button>
                </div>
            </td>
            <td>{price * quantity}</td>
            <td>
                <button onClick={handleDeleteCartItem} className="btn btn-square btn-outline btn-sm btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default CartItemRow;