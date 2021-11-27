import { map } from "cheerio/lib/api/traversing";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductImages({ images }) {
  // 🍂Image calculations🍃
  function FeaturedImage({ images }) {
    return (
      <div
        className={
          "flex" +
          " column" +
          " overflow-y-hidden" +
          " max-h-500px" +
          " max-w-100percent" +
          " br-15px"
        }
      >
        {images.map((image) => {
          return (
            <img
              className={"br-15px" + " width-100percent"}
              src={image.url + ".png"}
              alt={image.alt}
            />
          );
        })}
      </div>
    );
  }
  function ImageList({ images }) {}

  return (
    <div>
      <FeaturedImage images={images} />
    </div>
  );
}

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
    <div
      className={
        "flex" + " column" + " w-25vw" + " br-15px" + " bg-color-eggshell-paper"
      }
    >
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
    <div
      className={
        "flex" + " space-evenly" + " bg-color-red-wisteria" + " mt-125px"
      }
    >
      <ProductImages images={product.images} />
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
