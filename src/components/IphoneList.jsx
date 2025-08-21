import axios from "axios";
import Iphone from "./Iphone";
import Title from "./Title";
import { useQuery } from "@tanstack/react-query";

const url = "https://dummyjson.com/products/search?q=iphone";

const IphoneList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["iphone"],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
    staleTime: 1000 * 5 * 60,
  });
  if (isLoading) {
    return <div className="text-center mt-5 italic">... Loading</div>;
  }
  if (isError) {
    return <div className="text-center mt-5 italic">Server Error Now</div>;
  }
  return (
    <div className="px-5 mt-5 text-center">
      <Title text={"our products"} />
      <section className="grid gap-16 place-items-center md:grid-cols-2 lg:grid-cols-3 max-w-3/4 mx-auto md:gap-y-24 mt-5 items-stretch">
        {data?.products.map((product) => (
          <Iphone key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};
export default IphoneList;
