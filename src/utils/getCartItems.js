export const getCartItems = async () => {
    const res = await fetch("http://localhost:5500/cart", { next: { revalidate: 0 } });
    const data = await res.json();

    return data;
}