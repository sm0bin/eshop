export const getProducts = async () => {
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();

    return data;
}