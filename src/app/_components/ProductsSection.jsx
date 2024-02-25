import { getProducts } from '@/utils/getProducts';
import React from 'react';

const ProductsSection = async () => {
    const data = await getProducts();
    console.log(data);
    return (
        <div>
            <h1>Products</h1>
            <div className='grid grid-cols-4 gap-4'>
                {data?.map((product) => (
                    <div key={product.id}>
                        <h2>{product.productName}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductsSection;