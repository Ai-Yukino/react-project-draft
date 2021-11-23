import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
// import Products from "./components/Products";
import ProductPage from "./routes/ProductPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<App />} />
        <Route path="/:productName" element={<ProductPage name={"test"} />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Products />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
