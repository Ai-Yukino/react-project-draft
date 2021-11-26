import { map } from "cheerio/lib/api/traversing";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductImages({ images }) {}

function ProductInfo({
  name,
  description,
  categories,
  tags,
  options,
  prices,
  stock,
  measurements = null,
}) {
  // 🍂Categories calculations🍃
  function Categories({ categories }) {
    return (
      <div>
        Categories:{" "}
        {categories.map((category) => {
          return <span>{category} </span>;
        })}
      </div>
    );
  }
  // 🍂Tags calculations🍃
  function Tags({ tags }) {
    return (
      <div>
        Tags:{" "}
        {tags.map((tag) => {
          return <span>{tag} </span>;
        })}
      </div>
    );
  }

  // 🍂Options calculations🍃
  function Options({ options }) {
    return (
      <div>
        Options:{" "}
        {options.map((option) => {
          return <span>{option.option} </span>;
        })}
      </div>
    );
  }

  // 🍂Prices calculations🍃
  function Prices({ prices }) {
    return (
      <div>
        Prices:{" "}
        {prices.map((price) => {
          return <span>${price.price.toFixed(2)} </span>;
        })}
      </div>
    );
  }

  // 🍂Stock calculation🍃
  function Stock({ stock }) {
    return (
      <div>
        {stock.map((option) => {
          return (
            <>
              {option.stock <= 0 && (
                <span>Option {option.option}: Out of stock</span>
              )}
            </>
          );
        })}
      </div>
    );
  }

  // 🍂Measurements calculation🍃
  function Measurements({ measurements }) {
    return (
      <div>
        Capacity:{" "}
        {measurements.map((option) => {
          return <span>{option.volume + option.units} </span>;
        })}
      </div>
    );
  }

  return (
    <div className="bgColor-snow squircle">
      <div>{name}</div>
      <div>{description}</div>
      <Categories categories={categories} />
      <Tags tags={tags} />
      {options.length > 1 && <Options options={options} />}
      <Prices prices={prices} />
      <Stock stock={stock} />
      {measurements && <Measurements measurements={measurements} />}
    </div>
  );
}

export default function ProductPage() {
  let params = useParams();

  console.log(document.links);

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    path: "",
    description: "",
    categories: [],
    tags: [],
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
    }

    fetchData("./src/data/products.json");
  }, []);

  return (
    <div className="flex visualize">
      <ProductInfo
        name={product.name}
        description={product.description}
        categories={product.categories}
        tags={product.tags}
        options={product.options}
        prices={product.prices}
        stock={product.stock}
        measurements={product.measurements}
      />
    </div>
  );
}
