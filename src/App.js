import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route exact path="/" render={() => <Redirect to="/products" />} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
