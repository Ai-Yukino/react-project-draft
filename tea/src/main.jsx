import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
// import App from "./App";
import ProductPage from "./routes/ProductPage";
import Products from "./routes/Products";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/:productPath" element={<ProductPage />} />
      <Route path="/" element={<Products />} />
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
