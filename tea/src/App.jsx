import Products from "./components/Products";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <Link to="/test">Test</Link>
      <Products />
    </div>
  );
}

export default App;
