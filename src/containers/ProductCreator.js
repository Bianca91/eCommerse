//Dependencies
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

//MaterialUI

//Actions
import { createProduct } from "../actions/fetchProduct";

//Components
import CreateForm from '../components/createForm'

class ProductCreator extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired
  };

  createEvaluation = product => {
    this.props.createProduct(product);
  };

  render() {
    const { products } = this.props;
    console.log(products);

    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <CreateForm onSubmit={this.createProduct} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.products,
    user: state.user
  };
};

export default connect(mapStateToProps, {createProduct})(ProductCreator);
