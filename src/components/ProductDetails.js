import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { connect } from "react-redux";
import { fetchProduct, updateProduct } from "../actions/fetchProduct";
import ProductForm from '../components/ProductForm'

const style = {
  height: "150",
  width: "150",
  margin: "auto",
  display: "flex"
};

class ProductDetails extends PureComponent {
  state = {
    edit: false
  };

  static propTypes = {
    product: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id);
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  updateProduct = product => {
    this.props.updateProduct(this.props.match.params.id, product);
    this.toggleEdit();
  };

  render() {
    const { product } = this.props;
    if (!product) return null;
    console.log(product);
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <Card style={{ display: "inline-block", margin: 5 }}>
            {this.state.edit && (
              <ProductForm initialValues={product} onSubmit={updateProduct} />
            )}
            {!this.state.edit && (
              <div>
                <FloatingActionButton
                  mini={true}
                  disabled={true}
                  style={{ marginLeft: 300 }}
                >
                  <ContentAdd />
                </FloatingActionButton>

                <CardMedia
                  style={{ height: 350 }}
                  overlay={<CardTitle title={`${product.name}`} />}
                >
                  <img
                    src={product.image}
                    style={{ heigth: 300, width: 300 }}
                  />
                </CardMedia>
                <CardText style={{ textAlign: "left" }}>
                  <p>
                    This stunning {product.name} is only &euro;{" "}
                    {`${product.price}`}
                  </p>
                  <p>{`${product.description}`}</p>
                </CardText>

                <Divider />
              </div>
            )}

          </Card>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    product: state.product
  };
};

export default connect(mapStateToProps, { fetchProduct, updateProduct })(
  ProductDetails
);
