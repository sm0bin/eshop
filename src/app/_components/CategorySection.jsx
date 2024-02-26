import React from 'react';

const CategorySection = () => {
    const category = [
        {
            id: 1,
            name: 'All Products'
        },
        {
            id: 2,
            name: 'Clothing'
        },
        {
            id: 3,
            name: 'Shoes'
        },
        {
            id: 4,
            name: 'Furniture'
        },
        {
            id: 5,
            name: 'Groceries'
        },
        {
            id: 6,
            name: 'Electronics'
        }
    ];


    return (
        <div className=''>
            <div className="drawer drawer-end z-40">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-2xl font-bold">Categories</h2>
                        <label htmlFor="my-drawer-4" className="btn btn-sm btn-ghost">View all</label>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                        {category.slice(0, 6).map((item) => (
                            <button key={item.id} className="btn">{item.name}</button>
                        ))}
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
                        {category.map((item) => (
                            <button key={item.id} className="btn">{item.name}</button>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default CategorySection;