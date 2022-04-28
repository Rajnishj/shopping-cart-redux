import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route path="/product/:productid" element={<ProductDetail />} />
          <Route>Page Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
