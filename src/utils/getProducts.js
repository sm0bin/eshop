export const getProducts = async () => {
    const res = await fetch("https://eshop-server-psi.vercel.app/products");
    const data = await res.json();

    return data;
}