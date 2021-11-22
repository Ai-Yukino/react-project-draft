import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Product({ name, images, prices }) {
  let hasMultiplePrices = prices.length > 1;

  const pricesArray = prices.map((object) => {
    return object.price;
  });
  const minPrice = Math.min(...pricesArray);
  const maxPrice = Math.max(...pricesArray);

  if (minPrice === maxPrice) {
    hasMultiplePrices = false;
  }

  return (
    <div className="visualize">
      <img
        className="squircle"
        src={images[0].url + "s.png"}
        alt={images[0].alt}
      />
      <div className="bgColor-snow flex-center squircle padding-vertical">
        {/* <div>{name}</div> */}
        <div>
          <Route path="/d" element={name} />;
        </div>
        <div>
          $
          {!hasMultiplePrices
            ? prices[0].price.toFixed(2)
            : minPrice.toFixed(2) + " - $" + maxPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setProductsData(data);
    }

    fetchData("./src/data/products.json");
    // console.log(typeof products[2].name);
  }, []);
  // console.log(typeof products[2].name);

  const products = productsData.map((product) => {
    return (
      <Product
        key={product.id}
        name={product.name}
        images={product.images}
        prices={product.prices}
      />
    );
  });

  // setProductsData(
  //   productsData.sort((x, y) => {
  //     return (
  //       Date.parse(x.date["date-added"]) - Date.parse(y.date["date-added"])
  //     );
  //   })
  // );
  return <div className="flex">{products}</div>;
}

export default Products;