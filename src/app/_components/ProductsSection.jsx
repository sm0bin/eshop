import { getProducts } from '@/utils/getProducts';
import React from 'react';

const ProductsSection = async () => {
    const data = await getProducts();
    console.log(data);
    return (
        <div>
            <h1>Products</h1>
            <div className='grid grid-cols-4 gap-4 m-2'>
                {data?.map((product) => (
                    <div className="card bg-base-100 shadow-md">
                        <figure className="">
                            <img src={product.image} alt="Shoes" className="w-full h-32 object-cover" />
                        </figure>
                        <div className="card-body p-3 items-center text-center">
                            <h2 className="card-title text-lg">{product.productName}</h2>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductsSection;