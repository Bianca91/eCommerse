import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import SignupPage from './containers/SignupPage'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
