import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product({ name, images, prices, path }) {
  // 🍂Price calculations🍃
  let hasMultiplePrices = prices.length > 1;
  const pricesArray = prices.map((object) => {
    return object.price;
  });
  const minPrice = Math.min(...pricesArray);
  const maxPrice = Math.max(...pricesArray);

  if (minPrice === maxPrice) {
    hasMultiplePrices = false;
  }

  // 🍂Image calculations🍃
  const Images = images.filter((image) => {
    return image.hasOwnProperty("display");
  });
  const topImage = Images.find((object) => {
    return object.display === "top";
  });
  const bottomImage = Images.find((object) => {
    return object.display === "bottom";
  });

  return (
    <div className="visualize">
      <Link
        to={path}
        onClick={() => {
          document.title = "A small tea shop | " + name;
        }}
      >
        <div className="position-relative height-250px width-400px">
          <img
            className="squircle position-absolute transition-opacity"
            src={topImage.url + "s.png"}
            alt={topImage.alt}
          />
          <img
            className="squircle position-absolute opacity-0 transition-opacity hover-opacity"
            src={bottomImage.url + "s.png"}
            alt={bottomImage.alt}
          />
        </div>
      </Link>

      <div className="bgColor-snow flex-center squircle padding-vertical">
        <Link
          className="no-text-decoration hover-color-olive"
          to={path}
          onClick={() => {
            document.title = "A small tea shop | " + name;
          }}
        >
          <div>{name}</div>
        </Link>

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
  document.title = "A small tea shop";
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
        path={product.path}
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
