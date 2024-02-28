import ProductsSection from "./_components/ProductsSection";
import CartSection from "./_components/CartSection";
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query';

// const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="">
      {/* <QueryClientProvider client={queryClient}> */}
      <div className="grid grid-cols-2 gap-2 h-screen">
        <CartSection />
        <ProductsSection />
      </div>
      {/* </QueryClientProvider> */}
    </main>
  );
}
