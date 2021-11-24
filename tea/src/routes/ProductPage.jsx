import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      await setProduct(
        data.find((product) => {
          return product.path === params.productPath;
        })
      );
      // await console.log(product.path);
    }

    fetchData("./src/data/products.json");
  }, []);

  // const [productsData, setProductsData] = useState([]);

  // useEffect(() => {
  //   async function fetchData(url) {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProductsData(data);
  //     const currentProduct = await data.find((product) => {
  //       return product.path === params.productPath;
  //     });
  //     console.log(currentProduct.path);
  //   }

  return <>{product.name}</>;
}
