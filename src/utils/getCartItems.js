export const getCartItems = async () => {
    const res = await fetch("https://eshop-server-psi.vercel.app/cart", { next: { revalidate: 0 } });
    const data = await res.json();

    return data;
}