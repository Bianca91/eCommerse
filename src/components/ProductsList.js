import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../actions/fetchProduct";
import { createProduct, deleteProduct } from "../actions/fetchProduct";
import ProductForm from "../components/ProductForm";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 50
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    margin: 50
  },
  titleStyle: {
    color: "white"
  }
};

class ProductsList extends PureComponent {
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

  componentWillMount() {
    this.props.fetchAllProducts();
  }

  createProduct = product => {
    this.props.createProduct(product);
  };

  deleteProduct = productId => {
    this.props.deleteProduct(productId);
  };

  render() {
    const { products, currentUser } = this.props;
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {products.map(product => (
            <GridTile
              key={product.id}
              title={product.name}
              subtitle={product.price}
              actionIcon={
                <IconButton>
                  <StarBorder color="dark grey" />
                </IconButton>
              }
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img style={{ heigth: 500, width: 250 }} src={product.image} />
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </GridTile>
          ))}
        </GridList>
        <h1>Create a new product</h1>

        <ProductForm onSubmit={this.createProduct} />
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    products: state.products,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {
  fetchAllProducts,
  createProduct,
  deleteProduct
})(ProductsList);
