import axios from "axios";
import { useEffect, useState } from "react";
import Iphone from "./Iphone";
import Title from "./Title";

const url = "https://dummyjson.com/products/search?q=iphone";

const IphoneList = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(url);
      setAppData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="px-5 mt-5 mb-12 text-center">
      <Title text={"our products"} />
      <section className="grid gap-16 place-items-center md:grid-cols-2 lg:grid-cols-3 max-w-3/4 mx-auto md:gap-y-24 mt-5 items-stretch">
        {appData?.products.map((product) => (
          <Iphone key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};
export default IphoneList;
