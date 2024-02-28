export const getProducts = async () => {
    const res = await fetch("http://localhost:5500/products");
    const data = await res.json();

    return data;
}