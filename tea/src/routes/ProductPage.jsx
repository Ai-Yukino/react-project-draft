import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductImages({ images }) {
  const [selectedImage, setSelectedImage] = useState("image-1");

  return (
    // 🍂Featured image calculations🍃
    <div className={"flex" + " space-evenly" + " w-70vw"}>
      <div
        className={
          "flex" +
          " column" +
          " overflow-y-hidden" +
          " max-h-500px" +
          " max-w-100percent" +
          " br-15px" +
          " smooth"
        }
      >
        {images.map((image) => {
          return (
            <div className={"mb-10px"} id={image.hash} key={image.hash}>
              <img
                className={"br-15px" + " width-100percent"}
                src={image.url + ".png"}
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>

      {/* 🍂Image list calculations🍃 */}
      <div className={"flex" + " column" + " space-around"}>
        {images.map((image) => {
          return (
            <a
              href={"#" + image.hash}
              onClick={(e) => {
                setSelectedImage(image.hash);
              }}
              key={image.hash}
            >
              <img
                className={
                  " br-15px" +
                  (image.hash === selectedImage ? " border-green-bamboo" : "")
                }
                src={image.url + "-20percent.png"}
                alt={image.alt}
              />
            </a>
          );
        })}
      </div>
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
  measurements,
}) {
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

  // 🍂Options calculations🍃
  // let hasMeasurements = measurements != null;
  // const [selectedCapacity, setSelectedCapacity] = useState("");
  // if (hasMeasurements) {
  //   setSelectedCapacity(
  //     measurements[0].volume.toString() + measurements[0].units
  //   );
  // }

  // let selectedCapacity = -1;
  // if (measurements.length > 0) {
  //   selectedCapacity = measurements[0].volume;
  // }

  // 🍂Categories calculations🍃
  function Categories({ categories }) {
    return (
      <div>
        <strong>Categories</strong>:{" "}
        {categories.map((category, index) => {
          return (
            <span key={category}>
              {category + (index + 1 < categories.length ? ", " : "")}
            </span>
          );
        })}
      </div>
    );
  }

  // 🍂Tags calculations🍃
  function Tags({ tags }) {
    return (
      <div>
        <strong>Tags</strong>:{" "}
        {tags.map((tag, index) => {
          return (
            <span key={tag}>
              {tag + (index + 1 < tags.length ? ", " : "")}{" "}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={
        "flex" +
        " column" +
        " w-20vw" +
        " br-15px" +
        " pd-20px" +
        " bg-color-seashell" +
        " space-between"
      }
    >
      <div>
        <h1 className={" mt-0"}>{name}</h1>
        <div className={" font-size-23px"}>
          $
          {!hasMultiplePrices
            ? minPrice.toFixed(2)
            : minPrice.toFixed(2) + " - $" + maxPrice.toFixed(2)}
        </div>
      </div>
      <div>{description}</div>
      <div>
        <Categories categories={categories} />
        <Tags tags={tags} />
      </div>
    </div>
  );
}

export default function ProductPage() {
  let params = useParams();

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
    <div className={"flex" + " space-evenly" + " mt-125px"}>
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

// 🍂Old code🍃
// ProductInfo body
// 🍂Options and prices calculations🍃
// function OptionsPrices({ options, prices }) {
//   const [selectedOption, setSelectedOption] = useState(options[0].option);
//   if (selectedOption != "default") {
//     return (
//       <div className={"flex" + " space-evenly"}>
//         {options.map((option) => {
//           return (
//             <div
//               className={
//                 "bg-color-steamed-chestnut" +
//                 " br" +
//                 (option.option === selectedOption
//                   ? " border-green-bamboo"
//                   : "") +
//                 " font-size-20px" +
//                 " pd-5px" +
//                 " pointer" +
//                 " user-select-none"
//               }
//               key={option.option}
//               onClick={() => {
//                 setSelectedOption(option.option);
//               }}
//             >
//               {option.option}
//             </div>
//           );
//         })}
//       </div>
//     );
//   } else {
//     return <div>Price: {prices[0].price}</div>;
//   }
// }

// 🍂Prices calculations🍃
// function Prices({ prices }) {
//   return (
//     <div>
//       <strong>Prices</strong>:{" "}
//       {prices.map((price) => {
//         return <span key={price.option}>${price.price.toFixed(2)} </span>;
//       })}
//     </div>
//   );
// }

// 🍂Stock calculation🍃
// function Stock({ stock }) {
//   if (
//     stock.find((option) => {
//       return option.stock <= 0;
//     })
//   ) {
//     return (
//       <div>
//         {stock.map((option) => {
//           return (
//             <>
//               {option.stock <= 0 && (
//                 <span key={option.option}>
//                   {option.option === "default"
//                     ? "Out of stock"
//                     : "Option " + option.option + ": out of stock"}
//                 </span>
//               )}
//             </>
//           );
//         })}
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// }

// 🍂Measurements calculation🍃
// function Measurements({ measurements }) {
//   return (
//     <div>
//       <strong>Capacity</strong>:{" "}
//       {measurements.map((option) => {
//         return <span>{option.volume + option.units} </span>;
//       })}
//     </div>
//   );
// }

// return()

// {measurements && <Measurements measurements={measurements} />}

// {options.length > 1 && (
//   <OptionsPrices options={options} prices={prices} />
//   )}

// {/* <Prices prices={prices} />
//       <Stock stock={stock} /> */}
// {/* <OptionsPrices options={options} prices={prices} /> */}
