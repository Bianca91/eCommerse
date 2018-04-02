import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";

const products = [
  {
    id: 1,
    name: "Handbag",
    price: 1450
  },
  {
    id: 5,
    name: "Heater",
    price: 550
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <ProductsList products={products} />
        <ProductDetails product={products[0]} />
      </div>
    );
  }
}

export default App;
