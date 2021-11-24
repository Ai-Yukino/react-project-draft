import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let params = useParams();

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    path: "",
    description: "",
    categories: [],
    tag: [],
    options: [],
    prices: [],
    stock: [],
    images: [],
    measurements: [],
    date: {},
  });

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(
        data.find((product) => {
          return product.path === params.productPath;
        })
      );
      document.title = "A small tea shop | " + product.path;
    }

    fetchData("./src/data/products.json");
  }, []);

  return <>{product.name}</>;
}
