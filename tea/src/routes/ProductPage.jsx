import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let params = useParams();

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setProductsData(data);
    }

    fetchData("./src/data/products.json");
    // console.log(typeof products[2].name);
    console.log(params.productName);
  }, []);

  useEffect(() => {
    let url = null;
    url = productsData.find((product) => {
      return product.productURL === params.productName;
    });
    console.log(url);
  }, []);

  // let url = null;
  // if (params.productName) {
  //   url = productsData.find((product) => {
  //     return product.productURL === params.productName;
  //   });
  // }
  // if (url === null) {
  //   return <>Placeholder text</>;
  // } else {
  //   return <div>{url}</div>;
  // }
  return <>Another placeholder</>;
}
