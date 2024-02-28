'use client';
import CartItemRow from "./CartItemRow";
import useLoadCart from "@/hooks/useLoadCart";
import { roundNumber } from "@/utils/roundNumber";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

export default function CartSection() {
    const [refetch, cart] = useLoadCart();
    if (!cart) return <div className="w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
    </div>;
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = roundNumber(subtotal * 0.015);
    const shipping = roundNumber(subtotal * 0.001);
    const discount = roundNumber(subtotal * 0.1);
    const total = roundNumber(subtotal + tax + shipping - discount);

    const navLinks = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/location", label: "Location" },
        { href: "/invoices", label: "POS Invoices" },
        { href: "/settings", label: "Settings" },
    ];

    // Note
    // Shipping
    // Hold Orders
    // New Item
    const btns = [
        {
            id: 1,
            name: 'Note',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        },
        {
            id: 2,
            name: 'Shipping',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        },
        {
            id: 3,
            name: 'Hold Orders',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
        },
        {
            id: 4,
            name: 'New Item',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        }
    ];

    // Cancel
    // Hold
    // Discount
    // Pay Now
    const btns2 = [
        {
            id: 1,
            name: 'Cancel',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        },
        {
            id: 2,
            name: 'Hold',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
            </svg>
        },
        {
            id: 3,
            name: 'Discount',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
            </svg>
        },
        // {
        //     id: 4,
        //     name: 'Pay Now',
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        //     </svg>

        // }
    ];

    const btnsMarkup = btns.map(({ id, name, icon }) => {
        return (
            <button key={id} className="btn btn-sm">
                {icon}
                {name}
            </button>
        );
    });

    const btnsMarkup2 = btns2.map(({ id, name, icon }) => {
        return (
            <button key={id} className="btn btn-sm">
                {icon}
                {name}
            </button>
        );
    });

    const navLinksMarkup = navLinks.map(({ href, label }) => {
        return (
            <li key={href}>
                <a href={href}>{label}</a>
            </li>
        );
    });

    const handlePay = () => {
        Swal.fire({
            title: "Payment Confirm?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#27ae60",
            cancelButtonColor: "#e74c3c",
            confirmButtonText: "Pay Now",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Success!",
                    text: "Your payment has been confirmed",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="drawer z-50" >
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-2 flex flex-col gap-2 h-screen bg-gray-100">
                {/* Page content here */}

                {/* Buttons */}
                <div className="flex justify-between">
                    <label htmlFor="my-drawer" className="btn btn-ghost btn-sm btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                    <div className="space-x-2">
                        {btnsMarkup}
                    </div>
                </div>

                {/* User Section */}
                <div className="flex items-center justify-between bg-base-300 rounded-md">
                    <button className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Steve Jobs
                    </button>

                    <button onClick={() => document.getElementById('addUserModal').showModal()} className="btn btn-square btn-ghost" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>



                {/* Cart Items */}
                <div className="overflow-y-auto flex-grow">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {
                                cart?.map((item) => (
                                    <CartItemRow key={item._id} item={item} refetch={refetch} />
                                ))
                            }

                        </tbody>
                    </table>
                </div>

                {/* Calculation Section */}
                <div className="pl-96 bg-base-200 rounded-md p-2">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Subtotal</h2>
                        <h3 className="font-semibold">${subtotal}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">TAX</h2>
                        <h3 className="font-semibold">${tax}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Shipping</h2>
                        <h3 className="font-semibold">${shipping}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Discount on Cart</h2>
                        <h3 className="font-semibold">${discount}</h3>
                    </div>
                </div>

                {/* Cart Section */}
                <div className="flex items-center justify-between bg-base-300 rounded-md p-2">
                    <div className="flex items-center gap-3">
                        {/* <h2 className="text-2xl font-bold">Subtotal</h2> */}
                        <h2 className="text-2xl font-bold">Total</h2>
                        <h3 className="text-xl font-semibold">({cart.length} Products)</h3>
                    </div>

                    <h3 className="text-xl font-semibold">${total}</h3>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <div className="space-x-2">
                        {btnsMarkup2}
                    </div>
                    <button onClick={handlePay} className="btn btn-primary btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        Pay Now
                    </button>
                </div>
                {/* </div> */}



                {/* Modal Add User */}
                <dialog id="addUserModal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <figure className="w-full min-h-28">
                        <img src="/shop-local.svg" className="w-2/5 mx-auto mt-8 h-auto" alt="logo" />
                    </figure>
                    {navLinksMarkup}
                </ul>
            </div>
        </div >
    );
}
