import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// It's up to you to extend it a bit:
//
// add the proper proptypes, it should be expecting a property called product with
//all the product details
// show the price of the product in a paragraph tag with a euro-sign
// if the image is not null, show the image (using an img tag)
// show the product description in a paragraph tag
// add a 'Buy this product' button using the button tag (without connecting any action to it yet)
// Save it as ProductDetails.jsx in your components folder, don't forget the imports.

class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.shape(
      (id: PropTypes.number.isRequired),
      (name: PropTypes.string.isRequired),
      (description: PropTypes.string.isRequired),
      (price: PropTypes.number.isRequired),
      (image: PropTypes.string.isRequired)
    )
  };

  render() {
    console.log(products)
    const { product } = this.props;
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{`_ ${product.price}`}.00 </p>

        <img> {product.image} </img>
      </div>
    );
  }
}

export default ProductDetails
