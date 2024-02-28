import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLoadCart = () => {

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['cartItems'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5500/cart');
            return res.data;
        }
    });


    return [refetch, data, isLoading];
};

export default useLoadCart;